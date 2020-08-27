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
                    <div class="card-header text-center">
                        <h5 class="m-0">Word List</h5>
                    </div>
                    <div class="card-body">
                        <!-- Word List Start -->
                        <word-list-component />
                        <!-- Word List End -->
                    </div>
                </div>
            </div>

            <div class="col-12 mt-3">
                <!-- Pagination Start -->
                <pagination-component :data="[{}, {}]" />
                <!-- Pagination End -->
            </div>
        </div>
    </div>
</template>

<script>
import NewWordFormComponent from "@/components/backend/words/NewWordFormComponent.vue";
import WordListComponent from "@/components/backend/words/WordListComponent.vue";
import PaginationComponent from "@/components/frontend/global/PaginationComponent";
export default {
    name: "Words",
    components: {
        NewWordFormComponent,
        WordListComponent,
        PaginationComponent
    }
};
</script>

<style></style>
