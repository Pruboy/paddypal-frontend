<template>
  <v-app id="inspire">
    <div  class="circular" style="height:700px; wigth:600px;" >
      <v-content>
        <v-container fluid fill-height >
          <v-layout align-center justify-center >
            <v-flex xs12 sm8 >
              <v-card class="elevation-12" >
<<<<<<< HEAD
                 <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    v-model="selected"
    item-key="name"
    select-all
    class="elevation-1"
  >
    <!--template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template-->
    <template slot="items" slot-scope="props">
      <td>
        <v-button flat small color = "primary"
          test
        ></v-button>
      </td>
      <td>
        <v-btn flat color = "light-green" >
         
          {{ props.item.name }}</v-btn>
        
      </td>
=======
                <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"


  >
    <template slot="items" slot-scope="props" >
      <td>{{ props.item.name }}</td>
>>>>>>> 633b0570581e73a1d70cfdc496f3ac6826698cc3
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
<<<<<<< HEAD
      <td class="button">{{ props.item.iron }}</td>
    </template>
  </v-data-table>

=======
    </template>
  </v-data-table>
>>>>>>> 633b0570581e73a1d70cfdc496f3ac6826698cc3
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>


<script>
  export default {
    data () {
      return {
<<<<<<< HEAD
        search: '',
        selected: [],
=======
>>>>>>> 633b0570581e73a1d70cfdc496f3ac6826698cc3
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
<<<<<<< HEAD
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
=======
>>>>>>> 633b0570581e73a1d70cfdc496f3ac6826698cc3
          }
        ]
      }
    }
  }
</script>
