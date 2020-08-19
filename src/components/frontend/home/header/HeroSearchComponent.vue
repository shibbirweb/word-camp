<template>
    <div class="row">
        <div class="col-lg-12">
            <h2>Welcome to Word Camp...</h2>
            <form>
                <div class="row">
                    <div class="form-group col-lg-10">
                        <input
                            type="text"
                            class="form-control border"
                            name="search"
                            placeholder="Enter your word..."
                        />
                    </div>
                    <div class="form-gorup col-lg-2">
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
</template>

<script>
export default {
    name: "HeroSearchComponent"
};
</script>

<style lnag="scss"></style>
