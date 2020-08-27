<template>
    <form class=" row g-3">
        <div class="col-md-6">
            <label for="english" class="form-label required">English</label>
            <input
                type="email"
                class="form-control form-control-sm"
                id="english"
                placeholder="Example: Book"
            />
        </div>
        <div class="col-md-6">
            <label for="bangla" class="form-label required">বাংলা</label>
            <input
                type="email"
                class="form-control form-control-sm"
                id="bangla"
                placeholder="Example: বই"
            />
        </div>
        <div class="col-12">
            <label for="description" class="form-label">Description</label>
            <textarea
                class="form-control form-control-sm"
                id="description"
                rows="2"
                placeholder="Enter word description"
            ></textarea>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-sm btn-success mr-2">
                Update
            </button>
            <button
                type="button"
                class="btn btn-sm btn-info mr-2"
                @click="$emit('isEditState', false)"
            >
                Cancel
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: "EditFormWordComponent"
};
</script>

<style></style>
