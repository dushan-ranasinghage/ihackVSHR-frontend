import axios from 'axios'

export function getTestData(TankTypeVal, NationVal, ClanVal, GunVal, MapVal, CrewVal){
    return (dispatch) => {
        axios.get("http://localhost:8083/")
          .then(res => {
            dispatch({ type: 'GET_TEST', payload: res.data })
          })
          .catch(err => {
            dispatch({ type: 'GET_TEST_ERROR', payload: err.message })
          })
      }
} 