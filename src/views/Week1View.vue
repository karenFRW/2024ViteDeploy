<!-- 有三個結構 template(必要), script(加上setup), style -->

<script setup>
import { ref } from 'vue'

const menus = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    desc: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    desc: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18
  },
  {
    id: 3,
    name: '翡翠檸檬',
    desc: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34
  },
  {
    id: 4,
    name: '四季春茶',
    desc: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    desc: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25
  },
  {
    id: 6,
    name: '檸檬冰茶',
    desc: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20
  },
  {
    id: 7,
    name: '芒果綠茶',
    desc: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    desc: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20
  }
])
//caculate
</script>

<template>
  <h1>Week1 Lv2</h1>
  <table>
    <thead>
      <tr>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col">價格</th>
        <th scope="col">庫存</th>
      </tr>
    </thead>
    <tbody>
      <!-- 迴圈 v-for 一定要記得 :key -->
      <tr v-for="menu in menus" :key="menu.id">
        <td>{{ menu.name }}</td>
        <td>{{ menu.desc }}</td>
        <td>{{ menu.price }}</td>
        <td>
          <button type="button" v-on:click="menu.stock = menu.stock - 1" :disabled="menu.stock < 1">
            -
          </button>
          <label></label>{{ menu.stock }}
          <button type="button" v-on:click="menu.stock = menu.stock + 1">+</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
