/* Composition API */
import { computed } from '@vue/composition-api';
/* Types */
import { HistoryItem, TypedVuexStore } from '~/types';

/* Component compition refs */
export const mapHistoryState = (store: TypedVuexStore) => ({
  /* History Array */
  history: computed(() => [...store.history.history]),
});

/* Component methods mapped to history store actions */
export const mapHistoryActions = (store: TypedVuexStore) => ({
  addHistoryItem: (item: HistoryItem): void => {
    store.history.addHistoryItem(item);
  },
  deleteHistoryItem: (item: HistoryItem): void => {
    store.history.deleteHistoryItem(item);
  },
  clearHistory: (): void => {
    store.history.clearHistory();
  },
});
