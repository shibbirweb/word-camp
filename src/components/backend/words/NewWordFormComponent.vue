<template>
    <div class="card shadow-sm">
        <div class="card-header text-center">
            Add new Word
        </div>
        <div class="card-body">
            <form @submit.prevent="saveNewWordHandler">
                <div class="mb-3">
                    <label for="english" class="form-label required"
                        >English</label
                    >
                    <input
                        type="text"
                        v-model="form.en"
                        class="form-control form-control-sm"
                        id="english"
                        placeholder="Example: Book"
                        required
                        :disabled="loading"
                    />
                </div>
                <div class="mb-3">
                    <label for="bangla" class="form-label required"
                        >বাংলা</label
                    >
                    <input
                        type="text"
                        v-model="form.bn"
                        class="form-control form-control-sm"
                        id="bangla"
                        placeholder="Example: বই"
                        required
                        :disabled="loading"
                    />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label"
                        >Description</label
                    >
                    <textarea
                        class="form-control form-control-sm"
                        v-model="form.description"
                        id="description"
                        rows="2"
                        placeholder="Enter word description"
                        :disabled="loading"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    class="btn btn-success btn-block btn-sm d-flex justify-content-center align-items-center"
                    :disabled="loading"
                >
                    <span
                        v-if="loading"
                        class="spinner-border spinner-border-sm mr-1"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    Save
                </button>
                <p
                    class="my-0 mt-2 small text-center text-success"
                    v-if="successMessage"
                >
                    {{ successMessage }}
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "NewWordFormComponent",
    data: () => ({
        form: {
            bn: null,
            en: null,
            description: null
        },
        loading: false,
        successMessage: null
    }),
    methods: {
        ...mapActions("words", ["saveNewWord"]),
        resetForm() {
            this.form.en = null;
            this.form.bn = null;
            this.form.description = null;
        },
        async saveNewWordHandler() {
            this.successMessage = null;
            if (!this.form.bn || !this.form.en) {
                alert("Enter bangla and english word");
                return;
            }

            this.loading = true;

            const word = { ...this.form };
            try {
                await this.saveNewWord(word);
                this.resetForm();
                this.successMessage = "Word saved successfully";
            } catch (error) {}

            this.loading = false;
        }
    }
};
</script>

<style></style>
