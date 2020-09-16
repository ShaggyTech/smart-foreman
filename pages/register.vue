<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PageRegister',
  auth: false,
  setup() {
    const register = (): void => {};
    // form: Record<string, Ref>
    //   console.log(
    //     `Email: ${form.email.value}, Password: ${form.password.value}`
    //   );

    return { register };
  },
});
</script>

<template>
  <v-container fluid>
    <FormRegister class="pa-2" @submit="register" />
  </v-container>
</template>
