<template>
    <nav
        class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
        <router-link
            class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
            :to="{ name: 'Dashboard' }"
            >{{ navbarText }}</router-link
        >
        <button
            class="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
</template>

<script>
export default {
    name: "TopNavbarComponent",
    computed: {
        navbarText() {
            return this.$env.VUE_APP_SITE_TITLE;
        }
    }
};
</script>

<style></style>
