import { SET_POST } from "../../Actions/type";

const initialState = {
    posts: [],
    error: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            return { ...state, posts: action.payload }
            break;
        default:
            return state
            break;
    }
}

export default postReducer