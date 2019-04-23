<template>
  <v-app>   
    <v-navigation-drawer v-model="sideNav"  absolute
      temporary>
      <v-list>
        <v-list-tile
         v-for="item in menuItems" 
         :key="item.title"
         :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
         <v-list-tile
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title style="cursor: pointer" 
      >Amigo da Limpeza</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat 
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.link">
          <v-icon left dark>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main> 
      <router-view></router-view>
    </main>
  </v-app>
</template>


<script>
import Cadastre from './components/Cadastre'

export default {
  name: 'App',
  components: {
    Cadastre
  },
   data() {
       return {
        sideNav: false,
       } 
    },

    computed: {
      menuItems () {
        let menuItems = [
           {icon: 'face', title: 'Cadastre-se', link: 'cadastro'},
          {icon: 'lock_open', title: 'Fazer login', link: '/login'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'waves', title: 'Limpeza de Caixa de Água', link: '/limpeza-caixa-agua' },
          {icon: 'weekend', title: 'Limpeza de Sofá', link: 'limpeza-sofa' },
          {icon: 'adb', title: 'Dedetização', link: 'dedetizacao' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.go()
      }
    } 
}

</script>