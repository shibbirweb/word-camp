<template>
    <div class="row WordTableComponent">
        <div class="col-12">
            <table class="table table-striped border-sky-blue table-bordered">
                <thead class="table-info text-center">
                    <tr>
                        <th>Serial</th>
                        <th>English</th>
                        <th>Bangla</th>
                        <th>Added On</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-for="(word, index) in words" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ word.en }}</td>
                        <td>{{ word.bn }}</td>
                        <td>{{ word.createdAt.toDateString() }}</td>
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
