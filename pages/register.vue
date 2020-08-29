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
  <v-container>
    <FormRegister class="mx-auto pa-6" max-width="400px" @submit="register" />
  </v-container>
</template>
