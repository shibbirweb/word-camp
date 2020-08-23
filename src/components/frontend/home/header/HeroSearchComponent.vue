<template>
    <div class="row HeroSearchComponent align-items-center">
        <div class="col-lg-8 offset-lg-2 content">
            <div>
                <h1 class="display-6 font-weight-bold">{{ greetingText }}</h1>
            </div>
            <div class="search-bar mt-5 p-3 p-md-1 pl-md-2 pl-lg-4">
                <form @submit.prevent="formSubmitHandler">
                    <div class="row">
                        <div class="form-group col-md-9">
                            <input
                                type="text"
                                class="form-control border-0 shadow-0"
                                v-model="searchKeyword"
                                placeholder="Find my word..."
                                autocomplete="off"
                                autofocus
                            />
                        </div>
                        <div class="form-gorup col-md-3">
                            <button
                                type="submit"
                                class="btn btn-primary btn-block h-100 rounded-pill"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div
                class="search-result-summary"
                :class="{ 'hide-summary': !searchKeyword }"
            >
                <div class="stick"></div>
                <div class="text">
                    Found
                    {{ filteredWords.length }} word<span
                        v-if="filteredWords.length > 1"
                        >s</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "HeroSearchComponent",
    computed: {
        ...mapGetters(["filteredWords"]),
        greetingText() {
            return "Welcome to " + this.$env.VUE_APP_SITE_TITLE + "...";
        },
        searchKeyword: {
            get() {
                return this.$store.state.searchKeyword;
            },
            set(value) {
                this.$store.commit("updateSearchText", value);
            }
        }
    },
    methods: {
        formSubmitHandler() {
            this.$store.commit("updateSearchText", this.searchKeyword);
        }
    }
};
</script>

<style lang="scss" scoped>
.HeroSearchComponent {
    min-height: 400px;

    .content {
        .search-bar {
            background: white;
            border-radius: 10rem;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
            position: relative;
            z-index: 9;
            .form-control {
                &:focus {
                    box-shadow: none;
                }
            }
        }
        .search-result-summary {
            position: relative;
            text-align: center;
            transition-property: all;
            transition-duration: 0.1s;
            transition-timing-function: linear;
            &.hide-summary {
                margin-top: -46px;
            }
            .stick {
                position: absolute;
                display: block;
                background: white;
                width: 10px;
                left: 49%;
                height: 12px;
                box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
            }
            .text {
                color: #444;
                margin-top: 12px;
                background: white;
                display: inline-block;
                padding: 5px 16px;
                border-radius: 8px;
                box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
            }
        }
    }
}
</style>
