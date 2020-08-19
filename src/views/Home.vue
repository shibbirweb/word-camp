<template>
    <div>
        <!-- Navbar Start -->
        <navbar-component />
        <!-- Navbar End -->

        <!-- Hero Area Start -->
        <section class="hero_section">
            <div class="container">
                <!-- Hero Search Component -->
                <hero-search-component />
            </div>
        </section>
        <!-- Hero Area End -->

        <!-- Word Lists Start -->
        <section class="mt-5">
            <div class="container">
                <!-- Word list component -->
                <word-list-component />
            </div>
        </section>
        <!-- Word Lists End -->

        <!-- Footer Start -->
        <footer>
            <div class="container my-3">
                <!-- Footer Component -->
                <footer-component />
            </div>
        </footer>
        <!-- Footer End -->
    </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/frontend/global/NavbarComponent";
import HeroSearchComponent from "@/components/frontend/home/header/HeroSearchComponent";
import WordListComponent from "@/components/frontend/home/sections/word/list/WordListComponent";
import FooterComponent from "@/components/frontend/home/footer/FooterComponent";
export default {
    name: "Home",
    components: {
        NavbarComponent,
        HeroSearchComponent,
        WordListComponent,
        FooterComponent
    }
};
</script>

<style lang="scss" scoped>
.hero_section {
    background-image: url(../assets/images/hero_background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
