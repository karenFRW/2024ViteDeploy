<template>
  <div>
    <h1>Week2</h1>
    <h3>串接 API</h3>
  </div>
  <div>
    <h2>註冊 Sign Up</h2>
    <input v-model="emailSignUp" placeholder="Email" />
    <input v-model="passwordSignUp" placeholder="Password" type="password" />
    <input v-model="nickname" placeholder="Nickname" type="text" />
    <button @click="signUp">Sign Up</button>
    <p>{{ messageSignUp }}</p>

    <h2>登入 Sign In</h2>
    <input v-model="emailSignIn" placeholder="Email" type="email" />
    <input v-model="passwordSignIn" placeholder="Password" type="password" />
    <button @click="signIn">Sign In</button>
    <p>Token: {{ token }}</p>

    <h2>驗證 Verify</h2>
    <input v-model="tokenCheck" placeholder="Token" />
    <button @click="checkOut">Check Out</button>
    <p>{{ messageCheckOut }}</p>

    <h2>登出 Sign Out</h2>
    <input v-model="tokenSignOut" placeholder="Token" />
    <button @click="signOut">Sign Out</button>
    <p>{{ messageSignOut }}</p>

    <hr />
    <h2>Todo list</h2>
    <div v-if="token">
      <input v-model="newTodo" placeholder="New Todo" />
      <button @click="addTodo">Add Todo</button>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.content }} {{ todo.status ? '完成' : '未完成' }} | {{ todoEdit[todo.id] }}
          <input type="text" placeholder="更新值" @change="updateTodoEdit($event, todo.id)" />
          <button @click="deleteTodo(todo.id)">Delete</button>
          <button @click="updateTodo(todo.id)">Update</button>
          <button @click="toggleStatus(todo.id)">Toggle Status</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const apiURL = 'https://todolist-api.hexschool.io'

// 註冊
const emailSignUp = ref('')
const passwordSignUp = ref('')
const nickname = ref('')
const messageSignUp = ref('')

const signUp = async () => {
  messageSignUp.value = ''
  try {
    const response = await axios.post(`${apiURL}/users/sign_up`, {
      email: emailSignUp.value,
      password: passwordSignUp.value,
      nickname: nickname.value
    })
    messageSignUp.value = '註冊成功. UID: ' + response.data.uid
  } catch (error) {
    messageSignUp.value = '註冊失敗:' + error.message
  }
}

// 登入
const emailSignIn = ref('')
const passwordSignIn = ref('')
const token = ref('')

const signIn = async () => {
  token.value = ''
  try {
    const response = await axios.post(`${apiURL}/users/sign_in`, {
      email: emailSignIn.value,
      password: passwordSignIn.value
    })
    token.value = response.data.token
  } catch (error) {
    token.value = '登入失敗: ' + error.message
  }
}

// 驗證
const tokenCheck = ref('')
const messageCheckOut = ref('')

const checkOut = async () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  document.cookie = `hexschoolTodo=${tokenCheck.value}; expires=${tomorrow.toUTCString()}`

  try {
    const response = await axios.get(`${apiURL}/users/checkout`, {
      headers: {
        Authorization: tokenCheck.value
      }
    })
    messageCheckOut.value = '驗證成功 UID: ' + response.data.uid
    tokenCheck.value = '' //驗證成功把輸入框清空
  } catch (error) {
    messageCheckOut.value = '驗證失敗: ' + error.message
  }
}

// 登出
const tokenSignOut = ref('')
const messageSignOut = ref('')

const signOut = async () => {
  try {
    const response = await axios.post(
      `${apiURL}/users/sign_out`,
      {},
      {
        headers: {
          Authorization: tokenSignOut.value
        }
      }
    )
    //登出成功
    console.log(response.data)
    messageSignOut.value = response.data
    tokenSignOut.value = ''
  } catch (error) {
    tokenSignOut.value = '登出錯誤: ' + error.message
  }
}

// Todo list
const todos = ref([])
const newTodo = ref('')
const todoEdit = ref({})
//取
const getTodos = async () => {
  const response = await axios.get(`${apiURL}/todos`, {
    headers: {
      Authorization: token.value
    }
  })
  todos.value = response.data.data
}
//新
const addTodo = async () => {
  if (!newTodo.value) return
  const todo = {
    content: newTodo.value
  }
  await axios.post(`${apiURL}/todos`, todo, {
    headers: {
      Authorization: token.value
    }
  })
  newTodo.value = ''
  getTodos()
}
//刪
const deleteTodo = async (id) => {
  await axios.delete(`${apiURL}/todos/${id}`, {
    headers: {
      Authorization: token.value
    }
  })
  getTodos()
}
//修
const updateTodo = async (id) => {
  const todo = todos.value.find((todo) => todo.id === id)
  todo.content = todoEdit.value[id]
  await axios.put(`${apiURL}/todos/${id}`, todo, {
    headers: {
      Authorization: token.value
    }
  })
  getTodos()
  todoEdit.value = {
    ...todoEdit.value,
    [id]: ''
  }
}

const toggleStatus = async (id) => {
  await axios.patch(
    `${apiURL}/todos/${id}/toggle`,
    {},
    {
      headers: {
        Authorization: token.value
      }
    }
  )
  getTodos()
}
//取編輯的資料
const updateTodoEdit = (event, id) => {
  todoEdit.value = {
    ...todoEdit.value,
    [id]: event.target.value
  }
}

const TodoToken = document.cookie
  .split('; ')
  .find((row) => row.startsWith('hexschoolTodo='))
  ?.split('=')[1]

onMounted(() => {
  if (TodoToken) {
    token.value = TodoToken
  }
})
</script>
