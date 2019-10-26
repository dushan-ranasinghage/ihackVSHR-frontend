export default function (state = {loading:false}, action) {
    switch (action.type) {
        case 'IS_USER_AVAILABLE':
            return { ...state, isUserAvailable: action.payload };
        case 'LOGIN_ERROR':
            return { ...state, isUserAvailable: action.payload };
        default:
            return state;
    }
}