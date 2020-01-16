<template>
  <div>
    <v-text-field
        v-model="search"
        append-icon="search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
      <v-data-table
          :headers="encabezados"
          :items="datos"
          :items-per-page="3"
          :locale="en-ES"
          :multi-sort="true"
          :show-group-by="true"
          :search="search"
          class="elevation-1"
      ></v-data-table>
  </div>
</template>

<script>
  export default {
    name:'Tabla1',

    data () {
      return {
        search:'',
        encabezados: [
          {
            text: 'Nombre',
            align: 'left',
            sortable: false,
            value: 'nombre',
          },
          { text: 'Apellido', value: 'apellido' },
          { text: 'Edad', value: 'edad' },
          { text: 'Género', value: 'genero' },
          { text: 'Ciudad', value: 'ciudad' },
        ],
        datos: [
          {
            nombre: 'Cristian Camilo',
            apellido: 'Cantillo Zuluaga',
            edad: 28,
            genero: 'Masculino',
            ciudad: 'Manizales'
          },
          {
            nombre: 'Diana Paola',
            apellido: 'Loaiza',
            edad: 27,
            genero: 'Femenino',
            ciudad: 'Manizales'
          },
          {
            nombre: 'Andrés',
            apellido: 'Carvajal Arango',
            edad: 22,
            genero: 'Masculino',
            ciudad: 'Villamaría'
          },
          {
            nombre: 'Carlos Arturo',
            apellido: 'Cano Zapata',
            edad: 23,
            genero: 'Masculino',
            ciudad: 'Pereira'
          },
          {
            nombre: 'Hever Andrés',
            apellido: 'Castaño',
            edad: 20,
            genero: 'Masculino',
            ciudad: 'Vereda la Cumbre'
          },
        ],
      }
    },
  }
</script>