<template>
    <div class="row align-items-center">
        <div class="col-12 py-3">
            <p class="m-0 text-center">&copy; {{ footerText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComponent",
    computed: {
        footerText() {
            return this.$env.VUE_APP_AUTHOR_NAME + " - 2020";
        }
    }
};
</script>

<style lang="scss"></style>
