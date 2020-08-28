<script lang="ts">
import { defineComponent, Ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageLogin',
  setup() {
    const userLogin = (form: Record<string, Ref>): void =>
      console.log(
        `Email: ${form.email.value}, Password: ${form.password.value}`
      )

    return { userLogin }
  },
})
</script>

<template>
  <v-container>
    <FormLogin class="mx-auto pa-6" max-width="400px" @submit="userLogin" />
  </v-container>
</template>
