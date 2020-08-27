<template>
    <p class="text-center mb-0 text-light">&copy; {{ footerText }}</p>
</template>

<script>
export default {
    name: "FooterComponent",
    computed: {
        footerText() {
            return (
                this.$env.VUE_APP_AUTHOR_NAME + " " + new Date().getFullYear()
            );
        }
    }
};
</script>

<style></style>
