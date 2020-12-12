<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageLogin',
  auth: false,
  setup() {
    const login = (): void => {};
    // form: Record<string, Ref>
    // console.log(
    //   `Email: ${form.email.value}, Password: ${form.password.value}`
    // );

    return { login };
  },
});
</script>

<template>
  <v-container fluid>
    <FormLogin class="mx-auto pa-2" @submit="login" />
  </v-container>
</template>
