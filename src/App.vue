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
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import PostForm from './components/PostForm'
export default {
  name: 'app',
  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
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
  padding-left: 30px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 1rem;
}
img{
  width: 100px;
}
</style>
