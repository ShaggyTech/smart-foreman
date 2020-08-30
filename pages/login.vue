<script lang="ts">
import { defineComponent, Ref } from '@vue/composition-api'

export default defineComponent({
  name: 'PageLogin',
  setup() {
    const login = (form: Record<string, Ref>): void =>
      console.log(
        `Email: ${form.email.value}, Password: ${form.password.value}`
      )

    return { login }
  },
})
</script>

<template>
  <v-container fluid>
    <FormLogin class="mx-auto pa-2" @submit="login" />
  </v-container>
</template>
