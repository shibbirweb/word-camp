<template>
    <div class="row WordTableComponent">
        <div class="col-12 table-responsive-md">
            <table class="table table-striped border-sky-blue table-bordered">
                <thead class="table-info text-center">
                    <tr>
                        <th>Serial</th>
                        <th>English</th>
                        <th>Bangla</th>
                        <th>Synonyms</th>
                        <th>Antonyms</th>
                        <th>Sentence</th>
                        <th>Added On</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-if="words.length === 0">
                        <td colspan="4" class="text-center text-secondary">
                            No word found
                        </td>
                    </tr>
                    <tr v-else v-for="(word, index) in words" :key="index">
                        <td>{{ word.serialKey }}</td>
                        <td>{{ word.en }}</td>
                        <td>{{ word.bn }}</td>
                        <td>{{ word.synonyms }}</td>
                        <td>{{ word.antonyms }}</td>
                        <td>{{ word.sentence }}</td>
                        <td>{{ dateFormat(word.createdAt) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "WordTableComponent",
    props: {
        words: {
            type: Array,
            required: true
        }
    },
    methods: {
        dateFormat(timestamp) {
            let date;

            try {
                date = new Date(timestamp.seconds * 1000).toDateString();
            } catch (error) {
                date = "Not available";
            }

            return date;
        }
    }
};
</script>

<style lang="scss" scoped>
.WordTableComponent {
    table.border-sky-blue {
        border-color: #bee5eb;
    }
}
</style>
