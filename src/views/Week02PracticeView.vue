<style></style>

<template>
  <h3>輸入框 連動</h3>
  <div>
    <input type="text" v-model="newName" /> {{ newName }}
    <input type="number" v-model="newNumber" /> {{ newNumber }}
    <button type="button" v-on:click="addProduct">新增到資料集</button>
  </div>
  {{ data }}

  <div>
    <table>
      <thead>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newName = ref('')
const newNumber = ref(0)

const data = ref([])

const addProduct = () => {
  console.log('addProduct', data.value)
  data.value.push({
    id: new Date().getTime(),
    name: newName.value,
    price: newNumber.value
  })
  newName.value = ''
  newNumber.value = 0
}
</script>
