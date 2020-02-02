<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Posts count: {{postsCount}}</h1>
    <PostForm/>
    <div class="post" v-for='post in validPosts' :key='post.id'>
      <h2 class="">{{post.title}}</h2>
      <p>
        {{post.body}}
      </p>
      <button class="button edit">edit</button>
      <button class="button delete" v-on:click="removePost(post)">Delete</button>
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
    ...mapMutations(['deletePost']),
    ...mapActions(['fetchPosts']),
    removePost(post) {
      this.deletePost({
          post: post
      })
    }
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
  padding: 0 30px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  margin-bottom: 2rem;
}
img{
  width: 100px;
}
.button{ 
  display: block;
  margin-bottom: 10px;
  float: right;
  border: none;
  color: white;
  padding: 5px 10px 5px 10px;
  background: #2c3e50;
  
}
.delete{
  margin-right: 2px;
}

.button:hover,
.button:focus,
.button:active{
    background-color: #41b883;
    cursor: pointer;
}
</style>
