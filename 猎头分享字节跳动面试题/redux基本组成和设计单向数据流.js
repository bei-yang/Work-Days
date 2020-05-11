let globalAction = {
  type: '@@redux/INIT' + Math.random()
}
const createStore = (reducer) => {
  let state
  let actionTypes = '@@redux/INIT' + Math.random()
  let initAction = {
    type: actionTypes
  }
  let eventList = []
  let getState = () => state
  let subscribe = (cb) => {
    eventList.push(cb)
  }
  let dispatch = (action = initAction) => {
    globalAction = action
    state = reducer(state, action)
    eventList.map((cb) => {
      cb()
    })
    return this
  }
  dispatch()
  return { getState, dispatch, subscribe }
}
const combineReducers = (reducers) => {
  let newState = {}
  return function () {
    for (let a in reducers) {
      newState[a] = reducers[a](newState[a], globalAction)
    }
    return newState
  }
}
export { createStore, combineReducers }