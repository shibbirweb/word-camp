<template>
    <div class="list-group list-group-flush">
        <div v-if="!words.length" class="list-group-item text-center">
            No word found
        </div>
        <word-list-item-component
            v-else
            v-for="(word, index) in words"
            :key="index"
            :word="word"
        />
    </div>
</template>

<script>
import WordListItemComponent from "./word-list-partials/WordListItemComponent";
export default {
    name: "WordListComponent",
    components: {
        WordListItemComponent
    },
    props: {
        words: {
            type: Array,
            required: true
        }
    }
};
</script>

<style></style>
