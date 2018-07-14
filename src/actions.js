import axios from 'axios'

// #region IP
export const loadDataRequest = () => {
  return {
    type: 'LOAD_DATA_REQUEST'
  }
}
export const loadDataSuccess = (data) => {
  return {
    type: 'LOAD_DATA_SUCCESS',
    data
  }
}
export const loadDataError = () => {
  return {
    type: 'LOAD_DATA_ERROR'
  }
}
export const loadData = () => {
  return dispatch => {
    dispatch(loadDataRequest())
    axios.get('http://httpbin.org/ip')
    .then(({data}) => dispatch(loadDataSuccess(data)))
    .catch(() => dispatch(loadDataError()))
  }
}
// #endregion IP
// #region UA
export const loadUARequest = () => {
  return {
    type: 'LOAD_UA_REQUEST'
  }
}
export const loadUASuccess = (data) => {
  return {
    type: 'LOAD_UA_SUCCESS',
    data
  }
}
export const loadUAError = () => {
  return {
    type: 'LOAD_UA_ERROR'
  }
}
export const loadUA = () => {
  return dispatch => {
    dispatch(loadUARequest())
    axios.get('http://httpbin.org/user-agent')
    .then(({data}) => dispatch(loadUASuccess(data)))
    .catch(() => dispatch(loadUAError()))
  }
}
// #endregion UA
