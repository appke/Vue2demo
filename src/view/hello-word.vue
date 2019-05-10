
<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>


<script>
export default {
    name: "hello-word",
    data() {
        return {message: 'hello vue word'}
    },
    methods: {
        getMessage() {
            httpRequest.request({
                url: '/api/hello',
                method: 'get'
            }).then(({data}) => {
                this.message = data.message
            })
        }
    }
}


</script>

