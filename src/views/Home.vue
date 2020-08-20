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

        <!-- Search Summary Start -->
        <section class="search_summary">
            <div class="stick_handler">
                <span class="stick one"></span>
                <span class="stick two"></span>
                <span class="stick three"></span>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div>
                            <h3>Found 3 Words</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Search Summary End -->

        <!-- Word Lists Start -->
        <section class="word_list_section py-3">
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
    background-color: #dfe7ea;
    background-image: url(../assets/images/hero_background.jpg),
        linear-gradient(207deg, #dfe7ea 0%, #dbc7ce 100%);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.word_list_section {
    background-color: rgb(203, 220, 210);
    background-image: url(../assets/images/word_background.jpg),
        linear-gradient(
            90deg,
            rgba(203, 220, 210, 0.9500175070028011) 0%,
            rgba(174, 201, 196, 0.9500175070028011) 100%
        );
    background-attachment: fixed;
}

.search_summary {
    background: rgb(236, 236, 236);
    min-height: 300px;
    position: relative;

    $stick_width: 15px;
    .stick_handler {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 48%;
        .stick {
            top: 0;
            bottom: 0;
            position: absolute;
            width: $stick_width;
            box-sizing: border-box;
            &.one {
                left: -$stick_width;
                background: linear-gradient(
                    90deg,
                    rgba(202, 155, 110, 1) 0%,
                    rgba(190, 152, 96, 1) 100%
                );
                &::before {
                    content: " ";
                    height: 10%;
                    border-right: 2px solid #997449;
                    position: absolute;
                    top: 20%;
                    border-top-left-radius: 50%;
                    border-bottom-right-radius: 50%;
                }
                &::after {
                    content: " ";
                    height: 20%;
                    border-right: 1px solid #997449;
                    position: absolute;
                    bottom: 20%;
                    left: 30%;
                    border-top-left-radius: 50%;
                    border-bottom-right-radius: 50%;
                }
            }
            &.two {
                background: linear-gradient(
                    90deg,
                    rgba(154, 109, 63, 1) 0%,
                    rgba(155, 107, 63, 1) 100%
                );
                &::after {
                    content: " ";
                    height: 20%;
                    border-right: 2px solid #8b5d32;
                    position: absolute;
                    top: 40%;
                    left: 30%;
                    border-top-left-radius: 50%;
                    border-bottom-right-radius: 50%;
                }
            }
            &.three {
                left: $stick_width;
                background: linear-gradient(
                    90deg,
                    rgba(105, 61, 24, 1) 0%,
                    rgba(105, 62, 26, 1) 100%
                );
            }
        }
    }
}
</style>
