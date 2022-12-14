import axios from 'axios'

const API_BASE = process.env.VUE_APP_API_BASE

// Items
async function getItems () {
  return await axios.get(API_BASE + '/items')
}

async function createItem (item) {
  return await axios.post(API_BASE + '/items', item)
}

async function modifyItem (item) {
  return await axios.put(API_BASE + '/items/' + item.id, item)
}

async function removeItem (item) {
  return await axios.delete(API_BASE + '/items/' + item.id)
}

// StockOut
async function getStockOutAndItems (from, to) {
  return await axios.get(API_BASE + '/stock-out-and-items?from=' + from + '&to=' + to)
}

async function getStockOutByItemId (id) {
  return await axios.get(API_BASE + '/stock-out/' + id)
}

async function stockOut (data) {
  return await axios.post(API_BASE + '/stock-out', data)
}

// Batches
async function getBatchesAndItems () {
  return await axios.get(API_BASE + '/batches-and-items')
}

async function addBatch (batch) {
  return await axios.post(API_BASE + '/batches', batch)
}

async function disableBatch (batchId) {
  return await axios.patch(API_BASE + '/batches/' + batchId)
}

async function getStockInAndItems (from, to) {
  return await axios.get(API_BASE + '/stock-in-and-items?from=' + from + '&to=' + to)
}

export default {
  getItems,
  createItem,
  modifyItem,
  getStockOutByItemId,
  addBatch,
  stockOut,
  removeItem,
  getBatchesAndItems,
  disableBatch,
  getStockOutAndItems,
  getStockInAndItems
}
