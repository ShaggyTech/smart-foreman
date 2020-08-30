<script lang="ts">
import { defineComponent, Ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageRegister',
  setup() {
    const register = (form: Record<string, Ref>): void =>
      console.log(
        `Email: ${form.email.value}, Password: ${form.password.value}`
      )

    return { register }
  },
})
</script>

<template>
  <v-container fluid>
    <FormRegister class="pa-2" @submit="register" />
  </v-container>
</template>
