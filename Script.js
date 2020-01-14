new Vue({
    el: "#app",
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      selectedFruits: [],
      disabled: false,
      readonly: false,
      chips: false,
      multiple: false,
    //   appendIcon: false,
    //   appendSlot: false,
    //   appendItemSlot: false,
    //   prependIcon: false,
    //   prependSlot: false,
    //   prependItemSlot: false,
    //   selectSlot: false,
      model: 'Foo',
    }),

    watch: {
      multiple (val) {
        if (val) this.model = [this.model]
        else this.model = this.model[0] || 'Foo'
      },
    },

    computed: {
        likesAllFruit () {
            return this.selectedFruits.length === this.items.length
        },
        likesSomeFruit () {
            return this.selectedFruits.length > 0 && !this.likesAllFruit
        },
        icon () {
            if (this.likesAllFruit) return 'mdi-close-box'
            if (this.likesSomeFruit) return 'mdi-minus-box'
            return 'mdi-checkbox-blank-outline'
        }
    },

    methods: {
        toggle () {
            this.$nextTick(() => {
            if (this.likesAllFruit) {
                this.selectedFruits = []
            } else {
                this.selectedFruits = this.items.slice()
            }
            })
        }
    },

    vuetify: new Vuetify(),
  })