import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_GARBS = 'GOT_GARBS'

/**
 * INITIAL STATE
 */
const garbs = []

/**
 * ACTION CREATORS
 */
const gotGarbs = garbData => ({type: GOT_GARBS, garbData})

/**
 * THUNK CREATORS
 */
export const getGarbs = userId => {
  return async dispatch => {
    const response = await axios.get(`api/garbs/${userId}`)
    const garbData = response.data
    dispatch(gotGarbs(garbData))
  }
}

export const getGarbsByType = (userId, type) => {
  return async dispatch => {
    const response = await axios.get(`api/garbs/${userId}/${type}`)
    const garbData = response.data
    dispatch(gotGarbs(garbData))
  }
}

/**
 * REDUCER
 */
export default function(state = garbs, action) {
  switch (action.type) {
    case GOT_GARBS:
      return action.garbData
    default:
      return state
  }
}
