<script setup>

import { onMounted, ref } from 'vue';
import axios from 'axios';

import TableComponent from '@/components/TableComponent.vue'
import { useRouter } from 'vue-router';

let products = ref([])
let name = ref('')
let price = ref(0)

let router = useRouter()

onMounted(()=>{
    axios.get('http://localhost:3000/product/')
    .then((res)=>{
        products.value = res.data.data
    })
})

function insertProduct(){
    axios.post('http://localhost:3000/product/',{
        name: name.value,
        price: price.value
    }).then((res)=>{
        alert(res.data.message)
        router.go()
    })
}

</script>

<template>

    <div>
        <TableComponent :products="products" />

        <div>
            <p>{{ name }}</p>
            <p>{{ price }}</p>
            <input v-model="name" type="text" placeholder="name" >
            <input v-model="price" type="number" placeholder="price" >
            <button @click="insertProduct">Insert</button>
        </div>
    </div>

</template>