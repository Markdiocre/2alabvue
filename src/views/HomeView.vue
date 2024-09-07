<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  import { useRouter } from 'vue-router';

  const router = useRouter()

  let username = ref('')
  let password = ref('')

  function sendCreds(){
    axios.post('http://localhost:3000/auth/login/',{
      username: username.value,
      password: password.value
    }).then((val)=>{
      alert(val.data.message)
      router.push({name: 'about'})
    }).catch((err)=>{
      alert(err.response.data.message)
    })
  }


</script>

<template>
  <div class="h-[100vh] bg-black text-xl text-white">
    HELLO
    <div class="form-holder">
      <input v-model="username" type="text" placeholder="username" />
      <input v-model="password" type="password" placeholder="password" class="password" />
    
      <button @click="sendCreds" >LOGIN</button>
    </div>    
  </div>

</template>

<style scoped>

</style>
