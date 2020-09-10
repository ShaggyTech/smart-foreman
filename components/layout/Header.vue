<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Header',
});
</script>

<template>
  <v-app-bar app hide-on-scroll>
    <v-app-bar-nav-icon />

    <v-spacer />

    <v-toolbar-title>
      <v-btn to="/" nuxt exact tile block depressed x-large>
        Smart Foreman
      </v-btn>
    </v-toolbar-title>

    <v-spacer />

    <v-btn text nuxt to="/register">
      <v-icon left> mdi-account-plus </v-icon>Register
    </v-btn>
    <v-btn text nuxt to="/login">
      <v-icon left> mdi-account-hard-hat </v-icon>
      Login
    </v-btn>
  </v-app-bar>
</template>
