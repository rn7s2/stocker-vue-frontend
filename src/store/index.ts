import { createStore } from 'vuex'

export default createStore({
  state: {
    items: null,
    batchesAndItems: null,
    stockOutAndItems: null,
    stockInAndItems: null
  },
  getters: {
  },
  mutations: {
    setItems (state, items) {
      state.items = items
    },
    setBatchesAndItems (state, batchesAndItems) {
      state.batchesAndItems = batchesAndItems
    },
    setStockOutAndItems (state, stockOutAndItems) {
      state.stockOutAndItems = stockOutAndItems
    },
    setStockInAndItems (state, stockInAndItems) {
      state.stockInAndItems = stockInAndItems
    }
  },
  actions: {
  },
  modules: {
  }
})
