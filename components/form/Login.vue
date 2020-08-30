<script lang="ts">
import { defineComponent, ref, Ref, PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'FormLogin',
  props: {
    minWidth: {
      required: false,
      type: String as PropType<string>,
      default: '',
    },
    maxWidth: {
      required: false,
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(_, { emit }) {
    const email: Ref<string | null> = ref(null)
    const password: Ref<string | null> = ref(null)
    const form: Record<string, Ref<string | null>> = {
      email,
      password,
    }

    const submit = (): void => emit('submit', form)
    const clear = (): void => {
      email.value = null
      password.value = null
    }

    return {
      email,
      password,
      submit,
      clear,
    }
  },
})
</script>

<template>
  <v-card :min-width="minWidth" :max-width="maxWidth">
    <v-card-title>
      <p class="mx-auto px-2 headline text-h4 text-md-h2 text-center">Login</p>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="email" label="E-mail" required />
        <v-text-field
          v-model="password"
          label="Password"
          required
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" class="mr-4" @click="submit"> Login </v-btn>
      <v-btn @click="clear"> Clear </v-btn>
    </v-card-actions>
  </v-card>
</template>
