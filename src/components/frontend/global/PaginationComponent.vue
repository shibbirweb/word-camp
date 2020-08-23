<template>
    <div class="row PaginationComponent">
        <div class="col-12">
            <p>{{ currentPage }}</p>
        </div>
        <div class="col-12">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li
                        class="page-item"
                        :class="{ disabled: currentPage <= 1 }"
                    >
                        <a
                            class="page-link"
                            href="#"
                            tabindex="-1"
                            aria-disabled="true"
                            @click.prevent="currentPage--"
                            >Previous</a
                        >
                    </li>

                    <li
                        class="page-item"
                        v-for="(pageNumber, index) in renderPageNumbers"
                        :key="index"
                        :class="{ active: pageNumber === currentPage }"
                    >
                        <span v-if="isNaN(pageNumber)">{{ pageNumber }}</span>

                        <a
                            v-else
                            class="page-link"
                            href="#"
                            @click.prevent="currentPage = pageNumber"
                            >{{ pageNumber }}</a
                        >
                    </li>

                    <li
                        class="page-item"
                        :class="{ disabled: currentPage >= totalPage }"
                    >
                        <a
                            class="page-link"
                            href="#"
                            @click.prevent="currentPage++"
                            >Next</a
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaginationComponent',
    props: {
        data: {
            type: Array,
            required: true
        },
        paginate: {
            type: Number,
            default: 10
        },
        eachSide: {
            type: Number,
            default: 5
        },
        serialkey: {
            type: String,
            default: 'serialKey'
        },
        dotChars: {
            type: String,
            default: '...'
        }
    },
    watch: {
        currentPage: {
            handler: 'pageChangeHandler',
            immediate: true
        }
    },
    computed: {
        totalLength () {
            return this.data.length
        },
        totalPage () {
            return Math.ceil(this.totalLength / parseFloat(this.paginate))
        },
        beforeCurrentPageNumbers () {
            return this.currentPage - this.eachSide
        },
        aftarCurrentPageNumbers () {
            return this.currentPage + this.eachSide
        },
        renderPageNumbers () {
            const totalNumber = []
            for (let i = 1; i <= this.totalPage; i++) {
                if (this.addDot(i)) {
                    totalNumber.push(this.dotChars)
                    continue
                }

                if (this.addPage(i)) {
                    totalNumber.push(i)
                    continue
                }
            }
            return totalNumber
        }
    },
    data: () => ({
        currentPage: 1
    }),
    methods: {
        addPage (pageNumber) {
            if (pageNumber === 1 || pageNumber === this.totalPage) {
                return true
            }

            if (
                pageNumber >= this.beforeCurrentPageNumbers &&
                pageNumber <= this.aftarCurrentPageNumbers
            ) {
                return true
            }
            return false
        },
        addDot (pageNumber) {
            if (pageNumber === 1 || pageNumber === this.totalPage) {
                return false
            }

            if (
                pageNumber === this.beforeCurrentPageNumbers - 1 ||
                (pageNumber === this.aftarCurrentPageNumbers + 1 &&
                    pageNumber < this.totalPage)
            ) {
                return true
            }
            return false
        },
        pageChangeHandler (currentPage) {
            const start = this.paginate * (currentPage - 1)
            const end = start + this.paginate
            let serialkey = start
            const data = this.data.slice(start, end).map(datum => {
                datum[this.serialkey] = ++serialkey
                return datum
            })

            this.$emit('paginatedData', data)
        }
    }
}
</script>

<style lang="scss" scoped>
.PaginationComponent {
    .pagination {
        .page-item {
            margin-right: 0.5rem;

            .page-link {
                border-radius: 5px;
                box-shadow: 0 1px 3px -1px #b9ddf8;
            }
        }
    }
}
</style>
