<template>
    <form @submit.prevent="submit">
        <div class="body">
            <textarea type="text" v-model='body'></textarea>
            <button>Create Post</button>
        </div>
    </form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            body: ''
        }
    },
    methods: {
        ...mapMutations(['addPost']),
        submit() {
            this.addPost({
                body: this.body,
                id: Date.now(),
            })
            this.body = '';
        }
    }
}
</script>

<style>
    input {
        width: 50%;
        min-height: 60px;
        padding-left: 30px;
        border: 1px solid grey;
        border-radius: 5px;
        margin: 1rem;
    }
    .body{
        display: flex;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .body textarea {
        width: 100%;
        min-height: 60px;
        resize: none;
    }
    .body button{
        min-height: 60px;
        background-color: #41b883;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;

        transition: .3s;
    }
    .body button:hover,
    .body button:focus,
    .body button:active{
        background-color: #35495e;
        cursor: pointer;
    }
</style>