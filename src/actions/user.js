import axios from 'axios'

export function userLogin(username, password){
    return (dispatch) => {
        axios.get("http://localhost:4000/users/username/"+username+"/password/"+password)
          .then(res => {
            dispatch({ type: 'IS_USER_AVAILABLE', payload: res.data })
          })
          .catch(err => {
            dispatch({ type: 'LOGIN_ERROR', payload: err.message })
          })
      }
} 