<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light">
        <div class="container">
            <router-link class="navbar-brand" to="/">{{
                navTitle
            }}</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            aria-current="page"
                            :to="{ name: 'Home' }"
                            exact
                            >Home</router-link
                        >
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> -->
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link
                            v-if="currentUser"
                            :to="{ name: 'Dashboard' }"
                            class="nav-link"
                            >Dashboard</router-link
                        >
                        <router-link
                            v-else
                            :to="{ name: 'SignIn' }"
                            class="nav-link"
                            >Sign In</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "NavbarComponent",
    computed: {
        ...mapState("authentication", ["currentUser"]),
        navTitle() {
            return this.$env.VUE_APP_SITE_TITLE;
        }
    }
};
</script>

<style lang="scss" scoped>
nav {
    background-color: #4ac6ff6b;
    background-image: linear-gradient(#ffffff63 0%, #c1d6fc80 100%);
    -webkit-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05),
        inset 0 -1px 0 rgba(0, 0, 0, 0.15);

    .navbar-toggler:focus {
        box-shadow: none;
    }
    button.navbar-hamburger-button {
        &:focus {
            box-shadow: none; /* hide box shadow in navbar hamburger icon */
        }
    }
}
</style>
