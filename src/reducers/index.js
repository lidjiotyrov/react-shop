export const initialState = {
  user: {},
  isAuth: false,
};


// export const authReducer= (state = initialState, action) => {

// }

export function rootReducer(state = initialState, action) {
  if (action.type === 'AUTH_LOGIN') {
    return ({...state, user: action.payload.user, isAuth: action.payload.isAuth})
  } else {
    return state
  }
}


