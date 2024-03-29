/**
 * Documents
 * @default defaultData
 */

const defaultState = {
  width: 0,
  type: 'xs',
  theme: 'dark',
}

/**
 * Responsive
 */
export const SET_SCREEN = 'SET_SCREEN'
export const SET_SCREEN_OK = 'SET_SCREEN_OK'
export const SET_SCREEN_FAIL = 'SET_SCREEN_FAIL'

const getCode = (value) => {
  if (value < 600) return 'xs'
  if (value < 960) return 'sm'
  if (value < 1280) return 'md'
  if (value < 1920) return 'lg'
  return 'xl'
}

export const setScreen = (width) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SET_SCREEN })

      if (typeof width !== 'number' || width < 0) {
        const er = 'Input is null'
        dispatch({ type: SET_SCREEN_FAIL, reason: er })
        return reject(er)
      }

      const data = { width, type: getCode(width) }
      dispatch({ type: SET_SCREEN_OK, data })
      return resolve(data)
    })
  }
}

/**
 * Theme
 */
export const SET_THEME = 'SET_THEME'
export const SET_THEME_OK = 'SET_THEME_OK'
export const SET_THEME_FAIL = 'SET_THEME_FAIL'

export const setTheme = (theme = 'dark') => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SET_THEME })

      if (!['dark', 'light'].includes(theme)) {
        const er = 'Invalid theme type'
        dispatch({ type: SET_THEME_FAIL, reason: er })
        return reject(er)
      }

      const data = { theme }
      dispatch({ type: SET_THEME_OK, data })
      return resolve(data)
    })
  }
}

/**
 * Reducder
 */
// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SCREEN_OK:
      return { ...state, ...action.data }
    case SET_SCREEN_FAIL:
      return { ...state, ...action.data }
    case SET_THEME_OK:
      return { ...state, ...action.data }
    case SET_THEME_FAIL:
      return { ...state, ...action.data }
    default:
      return state
  }
}
