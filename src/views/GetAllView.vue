<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

import TableComponent from '@/components/TableComponent.vue'

let products = ref([])

onMounted(()=>{
    axios.get('http://localhost:3000/product/')
    .then((res)=>{
        products.value = res.data.data
    })
})

</script>

<template>
    <div class="hello">
        <TableComponent :products="products"/>
    </div>
</template>