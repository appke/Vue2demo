<template>
    <div id="app">
    <table>
    <tr>
        <th>序号</th>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>购买数量</th>
        <th>操作</th>
    </tr>
    <tr v-for="iphone in Ip_Json" v-bind:key="iphone">
        <td>{{ iphone.id }}</td>
        <td>{{ iphone.name }}</td>
        <td>{{ iphone.price }}</td>
        <td>
        <button v-bind:disabled="iphone.count === 0" v-on:click="iphone.count-=1">-</button>
        {{ iphone.count }}
        <button v-on:click="iphone.count+=1">+</button>
        </td>
        <td>
        <button v-on:click="iphone.count=0">移除</button>
        </td>
    </tr>
    </table>
    总价：${{totalPrice()}}
</div>
</template>

<script>
export default {
    
    name: "shopping",
    data() {
        return {
            msg: "购物车",
        }
    },
    
}
</script>

