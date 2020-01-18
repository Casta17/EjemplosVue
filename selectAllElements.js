new Vue({
    el: "#app",
    data: () => ({
        fruits: [
          'Apples',
          'Apricots',
          'Avocado',
          'Bananas',
          'Blueberries',
          'Blackberries',
          'Boysenberries',
          'Bread fruit',
          'Cantaloupes (cantalope)',
          'Cherries',
          'Cranberries',
          'Cucumbers',
          'Currants',
          'Dates',
          'Eggplant',
          'Figs',
          'Grapes',
          'Grapefruit',
          'Guava',
          'Honeydew melons',
          'Huckleberries',
          'Kiwis',
          'Kumquat',
          'Lemons',
          'Limes',
          'Mangos',
          'Mulberries',
          'Muskmelon',
          'Nectarines',
          'Olives',
          'Oranges',
          'Papaya',
          'Peaches',
          'Pears',
          'Persimmon',
          'Pineapple',
          'Plums',
          'Pomegranate',
          'Raspberries',
          'Rose Apple',
          'Starfruit',
          'Strawberries',
          'Tangerines',
          'Tomatoes',
          'Watermelons',
          'Zucchini',
        ],
        selectedFruits: [],
      }),

    computed: {
      likesAllFruit () {
        return this.selectedFruits.length === this.fruits.length
      },
      likesSomeFruit () {
        return this.selectedFruits.length > 0 && !this.likesAllFruit
      },
      icon () {
        if (this.likesAllFruit) return 'mdi-close-box'
        if (this.likesSomeFruit) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
    },

    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllFruit) {
            this.selectedFruits = []
          } else {
            this.selectedFruits = this.fruits.slice()
          }
        })
      },
    },

    vuetify: new Vuetify(),
  })