<template>
    <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
        <div class="position-sticky pt-3">
            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
                <span>Menu</span>
                <a
                    class="link-secondary"
                    href="#"
                    aria-label="Add a new report"
                >
                    <span data-feather="plus-circle"></span>
                </a>
            </h6>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        aria-current="page"
                        :to="{ name: 'Dashboard-Summary' }"
                    >
                        <span data-feather="home"></span>
                        Summary
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :to="{ name: 'Dashboard-Words' }"
                    >
                        <span data-feather="file"></span>
                        Words
                    </router-link>
                </li>
            </ul>

            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
            >
                <span>Account</span>
                <a
                    class="link-secondary"
                    href="#"
                    aria-label="Add a new report"
                >
                    <span data-feather="plus-circle"></span>
                </a>
            </h6>
            <ul class="nav flex-column mb-2">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="file-text"></span>
                        Sign Out
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "SideNavbarComponent"
};
</script>

<style></style>
