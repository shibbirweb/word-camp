<template>
    <div class="Dashboard">
        <!-- Top Navbar Start -->
        <top-navbar-component />
        <!-- Top Navbar End -->

        <div class="container-fluid">
            <div class="row">
                <!-- Side Navbar Component Start -->
                <side-navbar-component />
                <!-- Side Navbar Component End -->

                <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <router-view />
                </main>
            </div>
        </div>
        <footer class="container-fluid bg-secondary  mt-1 py-2">
            <div class="row">
                <div class="offset-md-3 offset-lg-2 col-md-9 col-lg-10">
                    <!-- Footer Componnet Start -->
                    <footer-component />
                    <!-- Footer Componnet End -->
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import TopNavbarComponent from "@/components/backend/global/TopNavbarComponent.vue";
import SideNavbarComponent from "@/components/backend/global/SideNavbarComponent.vue";
import FooterComponent from "@/components/backend/footer/FooterComponent.vue";
export default {
    name: "Dashboard",
    components: {
        TopNavbarComponent,
        SideNavbarComponent,
        FooterComponent
    }
};
</script>

<style lang="scss"></style>
