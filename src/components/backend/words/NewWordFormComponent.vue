<template>
    <div class="card">
        <div class="card-header text-center">
            Add new Word
        </div>
        <div class="card-body">
            <form action="">
                <div class="mb-3">
                    <label for="english" class="form-label required"
                        >English</label
                    >
                    <input
                        type="email"
                        class="form-control form-control-sm"
                        id="english"
                        placeholder="Example: Book"
                    />
                </div>
                <div class="mb-3">
                    <label for="bangla" class="form-label required"
                        >বাংলা</label
                    >
                    <input
                        type="email"
                        class="form-control form-control-sm"
                        id="bangla"
                        placeholder="Example: বই"
                    />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label"
                        >Description</label
                    >
                    <textarea
                        class="form-control form-control-sm"
                        id="description"
                        rows="2"
                        placeholder="Enter word description"
                    ></textarea>
                </div>
                <button type="submit" class="btn btn-success btn-block btn-sm">
                    Save
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewWordFormComponent"
};
</script>

<style></style>
