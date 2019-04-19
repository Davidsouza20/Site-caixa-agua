<template>
  <v-app>   
    <v-navigation-drawer v-model="sideNav"  absolute
      temporary>
      <v-list>
        <v-list-tile
         v-for="item in menuItems" 
         :key="item.title"
         router
         :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title style="cursor: pointer" 
      router 
      to="home">Amigo da Limpeza</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat 
        v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.link">
          <v-icon left dark>{{item.icon}}</v-icon>
          {{item.title}}
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
        menuItems: [
          {icon: 'waves', title: 'Limpeza de Caixa de Água', link: '/limpeza-caixa-agua' },
          {icon: 'weekend', title: 'Limpeza de Sofá', link: 'limpeza-sofa' },
          {icon: 'adb', title: 'Dedetização', link: 'dedetizacao' },
          {icon: 'face', title: 'Cadastre-se', link: 'cadastro'},
          {icon: 'lock_open', title: 'Fazer login', link: '/'},
        ]

       }
      }
}
</script>
