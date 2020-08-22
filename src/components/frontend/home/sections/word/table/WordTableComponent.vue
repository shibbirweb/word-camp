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
                    <tr v-for="n in 5" :key="n">
                        <td>1</td>
                        <td>Test</td>
                        <td>পরীক্ষা</td>
                        <td>12 Jun 2020</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Exam</td>
                        <td>12 Jun 2020</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Exam</td>
                        <td>12 Jun 2020</td>
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
