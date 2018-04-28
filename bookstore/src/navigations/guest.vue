<template>
  <v-toolbar app dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title>
            <v-btn color="accent" to="/">
            CURSO VUE</v-toolbar-title>
            </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/login">{{ $t('navigation.login') }}</v-btn>
      <v-btn flat to="/register">{{ $t('navigation.register') }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
    export default{
        name:"guest"
    }
</script>