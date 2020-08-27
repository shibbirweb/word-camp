<template>
    <div class="list-group list-group-flush">
        <word-list-item-component />
        <word-list-item-component />
        <word-list-item-component />
    </div>
</template>

<script>
import WordListItemComponent from "./word-list-partials/WordListItemComponent";
export default {
    name: "WordListComponent",
    components: {
        WordListItemComponent
    }
};
</script>

<style></style>
