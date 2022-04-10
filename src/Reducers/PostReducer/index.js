import { ADD_POST, DELETE_POST, FILTER_POST, RESTORE_POSTS, SET_POSTS } from "../../Actions/type";

const initialState = {
    initialPosts: [],
    posts: [],
    error: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTORE_POSTS:
            return { ...state, posts: state.initialPosts }
            break;
        case SET_POSTS:
            return { ...state, initialPosts: action.payload, posts: action.payload }
            break;
        case FILTER_POST:
            const postsFiltered = state.initialPosts.filter(post => (post.name == action.payload))
            return { ...state, posts: postsFiltered }
            break;
        case DELETE_POST:
            const postsWithOutDeleted = state.initialPosts.filter(post => (post.id != action.payload))
            return { ...state, initialPosts: postsWithOutDeleted, posts: postsWithOutDeleted }
            break;
        case ADD_POST:
            return { ...state, initialPosts: [...state.initialPosts, action.payload], posts: [...state.initialPosts, action.payload] }
            break;
        default:
            return state
            break;
    }
}

export default postReducer