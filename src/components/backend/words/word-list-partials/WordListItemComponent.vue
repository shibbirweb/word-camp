<template>
    <div class="list-group-item">
        <component :is="showComponent" @isEditState="updateState" :word="word" />
    </div>
</template>

<script>
import ShowWordComponent from "./ShowWordComponent";
import EditFormWordComponent from "./EditFormWordComponent";
export default {
    name: "WordListItemComponent",
    props: {
        word: {
            type: Object,
            required: true
        }
    },
    components: {
        ShowWordComponent,
        EditFormWordComponent
    },
    computed: {
        showComponent() {
            return this.isEditState ? EditFormWordComponent : ShowWordComponent;
        }
    },
    data: () => ({
        isEditState: false
    }),
    methods: {
        updateState(isEditState) {
            this.isEditState = isEditState;
        }
    }
};
</script>

<style></style>
