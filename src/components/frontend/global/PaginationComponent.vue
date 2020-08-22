<template>
    <div class="row PaginationComponent">
        <div class="col-12">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a
                            class="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                            >Previous</a
                        >
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent"
};
</script>

<style lang="scss" scoped>
.PaginationComponent {
    .pagination {
        .page-item {
            margin-right: 0.5rem;

            .page-link {
                border-radius: 2rem;
                box-shadow: 0 1px 3px -1px #b9ddf8;
            }
        }
    }
}
</style>
