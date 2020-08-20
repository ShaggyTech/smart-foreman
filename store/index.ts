/* Types */
import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from 'typed-vuex'

export const namespaced: boolean = true

const getDefaultState = () => ({
  counter: 0,
})

export const state = () => ({ ...getDefaultState() })

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  message: (state) => `The count is: ${state.counter}!`,
})

export const mutations = mutationTree(state, {
  SET_COUNTER(state, newCount: number) {
    state.counter = newCount
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    increment({ state, commit }) {
      commit('SET_COUNTER', state.counter + 1)
    },
  }
)

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  // modules: {},
})

export type TypedVuexStore = typeof accessorType
