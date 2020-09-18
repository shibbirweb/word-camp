<template>
    <form class=" row g-3" @submit.prevent="updateWordHandler">
        <div class="col-md-6">
            <label for="english" class="form-label required">English</label>
            <input
                type="text"
                v-model="form.en"
                class="form-control form-control-sm"
                id="english"
                placeholder="Example: Book"
                :disabled="loading"
            />
        </div>
        <div class="col-md-6">
            <label for="bangla" class="form-label required">বাংলা</label>
            <input
                type="text"
                v-model="form.bn"
                class="form-control form-control-sm"
                id="bangla"
                placeholder="Example: বই"
                :disabled="loading"
            />
        </div>
        <div class="col-md-6">
            <label for="synonyms" class="form-label required">Synonyms</label>
            <input
                type="text"
                v-model="form.synonyms"
                class="form-control form-control-sm"
                id="synonyms"
                placeholder="Example: Notepad"
                :disabled="loading"
            />
        </div>
        <div class="col-md-6">
            <label for="antonyms" class="form-label">Antonyms</label>
            <input
                type="text"
                v-model="form.antonyms"
                class="form-control form-control-sm"
                id="antonyms"
                placeholder="Example: Arrive"
                :disabled="loading"
            />
        </div>
        <div class="col-md-12">
            <label for="sentence" class="form-label">Sentence</label>
            <input
                type="text"
                v-model="form.sentence"
                class="form-control form-control-sm"
                id="sentence"
                placeholder="Example: This is a book"
                :disabled="loading"
            />
        </div>
        <div class="col-12">
            <label for="description" class="form-label">Description</label>
            <textarea
                v-model="form.description"
                class="form-control form-control-sm"
                id="description"
                rows="2"
                placeholder="Enter word description"
                :disabled="loading"
            ></textarea>
        </div>
        <div class="col-12 d-flex">
            <button
                type="submit"
                class="btn btn-sm btn-success mr-2 d-flex justify-content-center align-items-center"
                :disabled="loading"
            >
                <span
                    v-if="loading"
                    class="spinner-border spinner-border-sm mr-1"
                    role="status"
                    aria-hidden="true"
                ></span>
                Update
            </button>
            <button
                type="button"
                class="btn btn-sm btn-info mr-2"
                @click="$emit('isEditState', false)"
                :disabled="loading"
            >
                Cancel
            </button>
        </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "EditFormWordComponent",
    props: {
        word: {
            type: Object,
            required: true
        }
    },
    watch: {
        word: {
            handler: function(newValue) {
                this.form.en = newValue.en;
                this.form.bn = newValue.bn;
                this.form.description = newValue.description;
            },
            immediate: true,
            deep: true
        }
    },
    data: () => ({
        form: {
            en: null,
            bn: null,
            synonyms: null,
            antonyms: null,
            sentence: null,
            description: null
        },
        loading: false
    }),
    methods: {
        ...mapActions("words", ["updateWord"]),
        async updateWordHandler() {
            if (!this.form.en || !this.form.bn) {
                alert("Enter english and bangal word");
                return;
            }

            this.loading = true;

            const word = { ...this.word };
            word.en = this.form.en;
            word.bn = this.form.bn;
            word.synonyms = this.form.synonyms;
            word.antonyms = this.form.antonyms;
            word.sentence = this.form.sentence;
            word.description = this.form.description;
            try {
                await this.updateWord(word);
                this.$emit("isEditState", false);
            } catch (error) {}

            this.loading = false;
        }
    }
};
</script>

<style></style>
