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
  <div class="big">
    <input v-model="username" type="text" placeholder="username" />
    <input v-model="password" type="password" placeholder="password" />
  
    <button @click="sendCreds">Login</button>
  </div>
</template>

<style scoped>
.big{
  font-size: 60px;
}

</style>
