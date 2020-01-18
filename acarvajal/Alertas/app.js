new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
      return {
        cargando: false,
        dialog: false,
        tituloModal: "Titulo desde JS",
        textoModal: "Aca va el texto del modal, desde JS",
        dialogF: false,
        titulo: "Modal FullScreen",
        subTitulo: "SubTitulo Modal"
      }
    },
  
    watch: {
      cargando (val) {
        if (!val) return
  
        setTimeout(() => (this.cargando = false), 4000)
      },
    },
  })