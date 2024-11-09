<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

let data = ref('')

onMounted(()=>{
    axios.get('http://localhost/new_api/user/',{
        headers: {
            "Authorization": "Bearer "+localStorage.getItem('token')
        }
    })
    .then((res)=>{
        data.value = res.data
    }).catch(err=>{
        console.log(err)
    })
})

</script>

<template>
    <div class="big">{{ data }}</div>
</template>