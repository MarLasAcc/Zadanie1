Vue.component('v-autocompleter', {
    props: ['input'],
    computed: {
        searchResults: function () {
            let pattern = new RegExp('^' + this.input, 'i');
            let results = window.animals.filter(x => pattern.test(x));

            return results.length > 10 ? results.slice(0, 10) : results;
        }
    },
    template: `<div>
                <table>
                    <tr class="auto-result" v-for="result in searchResults">{{ result }}</tr>
                </table>
            </div>`
})


new Vue({
    el: "main",
    data: {
        inputContent: ""
    }
})