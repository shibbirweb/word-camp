<template>
    <div>
        <h6>{{ word.serialKey }}. {{ word.en }} ({{ word.bn }})</h6>
        <p class="mb-0 small"><strong>Synonyms</strong>: {{ word.synonyms }}</p>
        <p class="mb-0 small"><strong>Anonyms</strong>: {{ word.anonyms }}</p>
        <p class="mb-0 small"><strong>Sentence</strong>: {{ word.sentence }}</p>
        <p class="mb-0 small" v-text="word.description" />
        <div class="mt-2 d-flex">
            <button
                type="button"
                class="btn btn-sm btn-info mr-2"
                @click="$emit('isEditState', true)"
                :disabled="loading"
            >
                Edit
            </button>
            <button
                type="button"
                class="btn btn-sm btn-danger d-flex justify-content-center align-items-center"
                @click.prevent="wordDeleteHandler"
                :disabled="loading"
            >
                <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm mr-1"
                    role="status"
                    aria-hidden="true"
                ></span>
                Delete
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "ShowWordComponent",
    props: {
        word: {
            type: Object,
            requried: true
        }
    },
    data: () => ({
        loading: false
    }),
    methods: {
        ...mapActions("words", ["deleteWord"]),
        async wordDeleteHandler() {
            if (!confirm("Are you sure want to delete this word?")) {
                return;
            }

            this.loading = true;

            try {
                await this.deleteWord(this.word);
            } catch (error) {
                alert("Failed to delete word. Try again later");
            }

            this.loading = false;
        }
    }
};
</script>

<style></style>
