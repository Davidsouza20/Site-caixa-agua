<template>
    <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'https://cdn.pixabay.com/photo/2016/10/22/15/32/water-1761027_960_720.jpg', id: 'afajfjadfaadfa323', title: 'GARANTA UMA AGUA DE QUALIDADE PARA SUA FAMILIA, MANTENHA A CAIXA HIGIENIZADA DE 6 EM 6 MESES!' },
          { imageUrl: 'https://cdn.pixabay.com/photo/2012/02/16/12/09/service-13475_960_720.jpg', id: 'aadsfhbkhlk1241', title: 'LIMPEZA DE CAIXA D\'AGUA!' }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    top: 55%;
    background-color: #1976d2;
    color: white;
    font-size: 2em;
    padding: 25px;
  }
</style>