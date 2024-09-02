<script setup>
    defineProps({
        products: Array
    })
</script>

<template>
    <table>
        <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
        </thead>
        <tbody>
            <tr v-for="prod in products">
                <td>{{ prod.id }}</td>
                <td>{{ prod.name }}</td>
                <td>{{ prod.price }}</td>
            </tr>
        </tbody>
    </table>
</template>