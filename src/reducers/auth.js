const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: {},
    isLoading: false,
    errors: {}
}

export default function(state=initialState, action) {
    switch (action.type) {

        case 'USER_LOADING':
            return {...state, isLoading:true}

        case 'USER_LOADED':
            return {...state, isAuthenticated: true,isLoading:false, user: action.payload}

        case 'LOGIN_SUCCESSFUL':
            localStorage.setItem("token", action.payload.token);
            return {...state, ...action.payload, isAuthenticated: true, isLoading: false, errors: null};

        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("token");
            return {...state, token: null, user: null,isAuthenticated: false, isLoading: false};

        default:
            return state
    }
}