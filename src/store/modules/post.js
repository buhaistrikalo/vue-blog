export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            
            const posts = await res.json()
            
            ctx.commit('updatePosts', posts)
        },
        
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        addPost(state, post) {
            state.posts.unshift(post)
        },
        deletePost(state, post) {
            state.posts = state.posts.filter(t => t.id !== post.post.id)
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p => { return p.title && p.body })
        },
        allPosts(state) {
            return state.posts
        },
        postsCount(state, getters) {
            return getters.validPosts.length
        }
    },
}