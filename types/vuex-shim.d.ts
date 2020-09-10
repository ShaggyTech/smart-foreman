import { TypedVuexStore } from '~/store';

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: TypedVuexStore;
  }
}
