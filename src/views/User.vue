<template>
    <div id="user">
        <h1>Add User</h1>
        <input type="text" name="name" v-model="input.name" placeholder="Name" />
        <input type="text" name="id" v-model="input.id" placeholder="Id" />
        <input type="text" name="vip" v-model="input.vip" placeholder="Vip" />
        <input type="text" name="attending" v-model="input.attending" placeholder="Attending" />
        <button type="button" v-on:click="addNew()">Add</button>
    </div>
</template>

<script>
    export default {
        name: 'new',
        data() {
            return {
                input: {
                    name: "",
                    id: "",
                    vip:"",
                    attending:""
                }
            }
        },
        methods: {
            addNew() {
                
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>