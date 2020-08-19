<template>
    <div class="row HeroSearchComponent align-items-center">
        <div class="col-lg-8 offset-lg-2 content">
            <div>
                <h1 class="display-6 font-weight-bold">{{ greetingText }}</h1>
            </div>
            <div class="search-bar mt-5 p-3 p-md-1 pl-lg-4">
                <form>
                    <div class="row">
                        <div class="form-group col-md-9">
                            <input
                                type="text"
                                class="form-control border-0 shadow-0"
                                name="search"
                                placeholder="Find your word..."
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
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroSearchComponent",
    computed: {
        greetingText() {
            return "Welcome to " + this.$env.VUE_APP_SITE_TITLE + "...";
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

            .form-control {
                &:focus {
                    box-shadow: none;
                }
            }
        }
    }
}
</style>
