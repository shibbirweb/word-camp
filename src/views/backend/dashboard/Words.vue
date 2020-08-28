<template>
    <div class="Words">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 pt-3">
                <!-- New word form component start -->
                <new-word-form-component />
                <!-- New word fomr componnet end -->
            </div>

            <div class="col-lg-10 offset-lg-1 mt-3 table-responsive">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-4">
                                <button
                                    class="btn btn-sm btn-info"
                                    @click.prevent="fetchWords"
                                >
                                    Update Words
                                </button>
                            </div>
                            <div class="col-4 text-center">
                                <h5 class="m-0">Word List</h5>
                            </div>
                            <form
                                class="col-4 text-right"
                                @submit.prevent="searchHandler"
                            >
                                <input
                                    type="text"
                                    v-model="searchKeyword"
                                    class="form-control form-control-sm"
                                    style="max-width: 300px"
                                    placeholder="Find word"
                                />
                            </form>
                        </div>
                    </div>
                    <div class="card-body">
                        <!-- Word List Start -->
                        <word-list-component :words="paginatedWords" />
                        <!-- Word List End -->
                    </div>
                </div>
            </div>

            <div class="col-12 mt-3">
                <!-- Pagination Start -->
                <pagination-component
                    :data="backendFilteredWords"
                    @paginatedData="handlePaginatedWords"
                    :paginate="50"
                    :eachSide="3"
                />
                <!-- Pagination End -->
            </div>
        </div>
    </div>
</template>

<script>
import NewWordFormComponent from "@/components/backend/words/NewWordFormComponent.vue";
import WordListComponent from "@/components/backend/words/WordListComponent.vue";
import PaginationComponent from "@/components/frontend/global/PaginationComponent";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Words",
    components: {
        NewWordFormComponent,
        WordListComponent,
        PaginationComponent
    },
    computed: {
        ...mapGetters("words", ["backendFilteredWords"]),
        searchKeyword: {
            get() {
                return this.$store.state.words.backendSearchKeyword;
            },
            set(value) {
                this.$store.commit("words/updateBackendSearchKeyword", value);
            }
        }
    },
    data: () => ({
        paginatedWords: []
    }),
    methods: {
        ...mapActions("words", ["fetchWords"]),
        searchHandler() {
            console.log("searched");
        },
        handlePaginatedWords(words) {
            this.paginatedWords = words;
        }
    }
};
</script>

<style></style>
