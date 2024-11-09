<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  import { useRouter } from 'vue-router';

  const router = useRouter()

  let username = ref('')
  let password = ref('')

  function sendCreds(){
    axios.post('http://localhost/new_api/login/',{
      username: username.value,
      password: password.value
    }).then((val)=>{
      alert(val.data.status.message)
      localStorage.setItem('token', val.data.payload.token)
      
      router.replace({name: 'about'})
    }).catch((err)=>{
      alert(err.response.status.message)
    })
  }


</script>

<template>
  <div class="h-[100vh] w-full flex justify-center items-center bg-[#40548E]">
    <div class="m-5 rounded-lg flex items-center justify-center flex-col p-8 bg-[#BBB4C2] w-full md:w-fit">
      <input v-model="username" type="text" placeholder="username" class="bg-[#354E71] p-4"/>
      <input v-model="password" type="password" placeholder="password" class="mt-2 bg-[#354E71] p-4" />
    
      <button @click="sendCreds"class="mt-2 bg-yellow-400 w-full p-2 hover:bg-green-400">LOGIN</button>
    </div>    
  </div>
</template>

<style scoped>

</style>
