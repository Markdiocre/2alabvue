<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import TableComponent from '@/components/TableComponent.vue';

let products = ref([])
let route = useRoute()

onMounted(()=>{
    axios.get(`http://localhost:3000/product/${route.params.id}`)
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