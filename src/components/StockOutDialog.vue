<template>
  <a-modal width="600px" :visible="visible" :draggable="true" @ok="handleOk" @cancel="handleCancel" :hide-cancel="true">
    <template #title>
      出库 {{ item.name }}
    </template>
    <div>
      <a-form>
        <a-form-item label="出库日期" required>
          <a-date-picker v-model="date" />
        </a-form-item>
        <a-form-item label="出库数量" required>
          <a-input-number v-model="number" mode="button" :precision="0" :min="1" />
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>

<script>
import { defineComponent } from 'vue'
import ApiClient from '@/plugins/api-client'

export default defineComponent({
  name: 'StockOutDialog',
  props: ['visible', 'item'],
  data () {
    return {
      number: 1,
      date: (() => {
        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0')
        var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
        var yyyy = today.getFullYear()

        today = yyyy + '-' + mm + '-' + dd
        return today
      })()
    }
  },
  methods: {
    handleOk () {
      if (this.date === null || this.date === undefined || this.date === '') {
        this.$message.warning('请填写出库日期！')
        return
      }
      ApiClient.stockOut({
        id: 0,
        date: this.date,
        number: this.number,
        item_id: this.item.id
      }).then((res) => {
        this.$message.success('出库成功')
        this.$parent.closeStockOutDialog()
        this.$parent.refreshData()
      }).catch(err => this.$message.error('出库错误：' + err.message))
    },
    handleCancel () {
      this.$parent.closeStockOutDialog()
    }
  }
})
</script>
