export default {
    methods: {
        loadpreview: function (index, clicksource) {
            this.$store.dispatch("currentpreview", [index, clicksource]);
        }
    }
}
