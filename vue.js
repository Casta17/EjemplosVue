new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        return {
          fromDateMenu: false,
          fromTimeMenu: false,
          fromDateVal: null,
          fromTimeVal: null,
  
          minDate: "2020-01-01",
          maxDate: "2030-01-01"
        };
      },
      computed: {
        fromDateDisp() {
          return this.fromDateVal;
        },
        fromTimeDisp() {
            return this.fromTimeVal;
        }
      }
})