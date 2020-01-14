new Vue({
    el: "#app",
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      selectedFruits: [],
      disabled: false,
      readonly: false,
      chips: false,
      multiple: false,
      model: 'Foo',
    }),

    watch: {
      multiple (val) {
        if (val) this.model = [this.model]
        else this.model = this.model[0] || 'Foo'
      },
    },

    vuetify: new Vuetify(),
  })