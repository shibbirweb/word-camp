<template>
    <div class="SignIn">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="card border-0 form-area">
                        <div class="card-header">
                            <h2 class="text-center display-6">
                                Sign In
                            </h2>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label"
                                        >Email address</label
                                    >
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        placeholder="Enter email address"
                                        aria-describedby="emailHelp"
                                        autofocus
                                        autocomplete="off"
                                    />
                                    <div id="emailHelp" class="form-text">
                                        We'll never share your email with anyone
                                        else.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label"
                                        >Password</label
                                    >
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Enter password"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-info btn-block"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        <div class="card-footer text-center text-black-50">
                            <p class="m-0">&copy; {{ footerText }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignIn",
    computed: {
        footerText() {
            const date = new Date();
            return this.$env.VUE_APP_AUTHOR_NAME + " " + date.getFullYear();
        }
    }
};
</script>

<style lang="scss" scoped>
.SignIn {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #74ebd5;
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);

    .form-area {
        background-color: #f2f2f2;
        box-shadow: 0 0 4px 0 #0000005c;

        .card-header {
            background-color: #74ebd5;
            background-image: linear-gradient(to right, #9fade6, #74ebd5);
            background-size: 178%;
        }

        .form-control {
            &:focus {
                box-shadow: none;
            }
        }
    }
}
</style>
