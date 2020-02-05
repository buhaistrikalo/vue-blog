<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Posts count: {{postsCount}}</h1>
    <PostForm/>
    <div class="post" v-for='post in validPosts' :key='post.id'>
      <input v-if="post.edit" v-model="post.body"
      @blur="post.edit=false; $emit('update')"
      @keyup.enter="post.edit=false; $emit('update')">
      <div v-else>
        <label @click="editPost(post)">
          {{post.body}}
        </label>
      </div>
      <div class="button__blick">
        <button class="button edit " @click="editPost(post);">Edit</button>
        <button class="button delete" @click="removePost(post)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import {mapMutations} from 'vuex'
import PostForm from './components/PostForm'
export default {
  name: 'app',
  computed: mapGetters(['validPosts', 'postsCount']),
  
  methods: {
    ...mapMutations(['deletePost', 'editerPost']),
    ...mapActions(['fetchPosts', 'updatePost']),
    removePost(post) {
      this.deletePost({
          post: post
      })

    },
    editPost(post){
      this.editerPost({
        post: post
      })
      this.updatePost();
    },
  },
  async mounted() {
    this.fetchPosts(4);
  },
  components: {
    PostForm
  },
  
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  text-align: center;
  color: #2c3e50;
  margin-top: 60px auto;
}
.post{
  width: 50%;
  margin: 0 auto;
  text-align: left;
  padding: 30px 30px;
  padding-bottom: 10px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  margin-bottom: 2rem;
}
input{
  border: none;
}
img{
  width: 100px;
}
.button{ 
  margin-top: 20px;
  margin-bottom: 10px;
  
  border: none;
  color: white;
  padding: 5px 10px 5px 10px;
  background: #2c3e50;
  
}
.edit{
  margin-right: 2px;
}
.button__blick{
  display: flex;
  justify-content: flex-end;
}

.button:hover,
.button:focus,
.button:active{
    background-color: #41b883;
    cursor: pointer;
}
</style>
