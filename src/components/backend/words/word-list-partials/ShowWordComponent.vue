<template>
    <div>
        <h5>Book (বই)</h5>
        <p class="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div class="mt-2">
            <button
                type="button"
                class="btn btn-sm btn-info mr-2"
                @click="$emit('isEditState', true)"
            >
                Edit
            </button>
            <button type="button" class="btn btn-sm btn-danger">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShowWordComponent"
};
</script>

<style></style>
