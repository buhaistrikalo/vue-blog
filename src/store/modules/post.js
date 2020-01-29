export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            
            const posts = await res.json()
            
            ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
            
        },
        addPost(state, post) {
            state.posts.unshift(post)
        }
    },
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
            
        },
        postsCount(state) {
            return state.posts.length
        }
    },
}