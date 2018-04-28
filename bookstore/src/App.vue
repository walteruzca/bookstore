<template>
 <main>
    <v-app>
    <v-content>
      <v-container class="mt-3 mb-3">
      <router-view/>
      </v-container>
      </v-app>
      <app-Footer/>
    </v-content>
  </main>
</template>

<script>
import AppFooter from "@/components/Footer";
import GuestNavigation from "@/navigations/guest";
export default {
  components:{
    AppFooter,GuestNavigation
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
