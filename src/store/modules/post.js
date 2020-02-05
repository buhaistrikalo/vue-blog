export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            
            const posts = await res.json()
            
            ctx.commit('updatePosts', posts)
        },
        async updatePost(ctx, state) {
            ctx.commit('updatePosts', state.posts)
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
        },
        editerPost(state, post) {   
            let newStatePosts = state.posts;
            newStatePosts[post.post.id].edit = true;
            state.posts = newStatePosts;
        },
    },
    state: {
        posts: []
    },
    getters: {
        validPosts(state) {
            return state.posts.filter(p => { return p.body })
        },
        allPosts(state) {
            return state.posts
        },
        postsCount(state, getters) {
            return getters.validPosts.length
        }
    },
}