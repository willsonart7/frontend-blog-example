import { FILTER_POST, RESTORE_POSTS, SET_POSTS } from "../../Actions/type";

const initialState = {
    initialPosts: [],
    posts: [],
    error: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTORE_POSTS: 
            return {...state, posts: state.initialPosts}
        break;
        case SET_POSTS:
            return { ...state, initialPosts: action.payload, posts: action.payload }
            break;
        case FILTER_POST:
            const postsFiltered = state.initialPosts.filter(post => (post.name == action.payload))
            return { ...state, posts: postsFiltered }
            break;
        default:
            return state
            break;
    }
}

export default postReducer