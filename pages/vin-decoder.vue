<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VinDecoder',
  auth: false,
});
</script>

<template>
  <v-container column justify-center align-center>
    <vin-decoder-card />
    <lazy-vin-decoder-history />
  </v-container>
</template>
