new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: () => ({
        valid: true,
        text1: "",
        text2: "",
        select: null,
        itemsSelect: ["select1", "select2", "select3"],
        checkbox: null,
        r1: null,
        switch1: false,
        selectMult: null,
        itemsSelectMult: ["select1", "select2", "select3"],
        reglasText: [
            v => !!v || "text-field es requerido.",
            v => (v && v.length <= 10) || "Maximo 10 caracteres."
        ],
        reglasSelect: [v => !!v || "select es requerido."],
        reglasRadio: [v => !!v || "radio-group solo es requerido."],
        reglasCheckbox: [v => !!v || "checkbox es requerido."],
        reglasSwitch: [v => !!v || "switch es requerido."],
        reglasSelectMult: [v => !!v || "select multiple es requerido."],
        form: null,
        dataForm: null
    }),
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
        getFormValues() {
            this.form = this.$refs.form.inputs;
            var data = [];

            for (var i = 0; i < this.form.length; i++) {
                var val = null;

                val = this.form[i].value;

                if (!val) val = this.form[i].lazyValue;

                data.push({
                    id: this.form[i].id,
                    value: val
                });
            }

            this.dataForm = data;
            console.log(this.dataForm);
        }
    }
});