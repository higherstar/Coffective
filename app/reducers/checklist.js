import createReducer from '../createReducer'
import {MessageBarManager} from 'react-native-message-bar'
import { getToken, setUser } from './user'
import { NavigationActions as navigation } from 'react-navigation'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CATEGORIES_REQUEST = 'Checklist.GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'Checklist.GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'Checklist.GET_CATEGORIES_FAILURE'

export const GET_ARTICLES_REQUEST = 'Checklist.GET_ARTICLES_REQUEST'
export const GET_ARTICLES_SUCCESS = 'Checklist.GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAILURE = 'Checklist.GET_ARTICLES_FAILURE'

export const CHECK_ITEM_REQUEST = 'Checklist.CHECK_ITEM_REQUEST'
export const CHECK_ITEM_SUCCESS = 'Checklist.CHECK_ITEM_SUCCESS'
export const CHECK_ITEM_FAILURE = 'Checklist.CHECK_ITEM_FAILURE'

const GET_READY = 'get-ready'
const FALL_IN_LOVE = 'fall-in-love'
const KEEP_BABY_CLOSE = 'keep-baby-close'
const LEARN_YOUR_BABY = 'learn-your-baby'
const NOURISH = 'nourish'
const PROTECT = 'protect'

const ACF_GET_READY = 'get_ready'
const ACF_FALL_IN_LOVE = 'fall_in_love'
const ACF_KEEP_BABY_CLOSE = 'keep_baby_close'
const ACF_LEARN_YOUR_BABY = 'learn_your_baby'
const ACF_NOURISH = 'nourish'
const ACF_PROTECT = 'protect_breastfeeding'

// TODO backend can't change order :(
export const CATEGORIES_ORDER = [
  GET_READY,
  FALL_IN_LOVE,
  KEEP_BABY_CLOSE,
  LEARN_YOUR_BABY,
  NOURISH,
  PROTECT,
]

export const ACF_CATEGORIES = [
  ACF_GET_READY,
  ACF_FALL_IN_LOVE,
  ACF_KEEP_BABY_CLOSE,
  ACF_LEARN_YOUR_BABY,
  ACF_NOURISH,
  ACF_PROTECT,
]

// TODO on backend use the same acf checked items names as for categories
const MAP_ACF_CATEGORIES = {
  [GET_READY]: ACF_GET_READY,
  [FALL_IN_LOVE]: ACF_FALL_IN_LOVE,
  [KEEP_BABY_CLOSE]: ACF_KEEP_BABY_CLOSE,
  [LEARN_YOUR_BABY]: ACF_LEARN_YOUR_BABY,
  [NOURISH]: ACF_NOURISH,
  [PROTECT]: ACF_PROTECT,
}

// ------------------------------------
// Actions
// ------------------------------------
export const getCategories = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_CATEGORIES_REQUEST})
  return fetch(`/wp/v2/learn_categories/`, {
    method: 'GET',
    success: (categories) => dispatch({type: GET_CATEGORIES_SUCCESS, categories}),
    failure: () => dispatch({type: GET_CATEGORIES_FAILURE}),
  })
}

export const getArticles = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_ARTICLES_REQUEST})
  return fetch(`/wp/v2/learn?per_page=50`, {
    method: 'GET',
    success: (articles) => dispatch({type: GET_ARTICLES_SUCCESS, articles}),
    failure: () => dispatch({type: GET_ARTICLES_FAILURE}),
  })
}

export const checkItem = ({title, category}) => (dispatch, getState, {fetch}) => {
  dispatch({type: CHECK_ITEM_REQUEST})
  const {token} = dispatch(getToken())
  const {user} = getState().user
  // if item is in acf category remove from checked items and send new array
  // if no item add it to checked items and send new array
  const acfCategory = MAP_ACF_CATEGORIES[category]
  const checkedCategoryItems = user.acf[acfCategory] || []
  const checked = checkedCategoryItems.find(item => item === title)
  let newCheckedCategoryItems
  if (checked) {
    newCheckedCategoryItems = checkedCategoryItems.filter(item => item !== title)
  } else {
    newCheckedCategoryItems = [...checkedCategoryItems, title]
  }
  // update checkbox quickly to show user updated state
  dispatch(setUser({...user, acf: {
    ...user.acf,
    [acfCategory]: newCheckedCategoryItems,
  }}))
  dispatch(navigation.back())
  return fetch(`/wp/v2/users/${user.id}`, {
    method: 'POST',
    formData: true,
    body: {
      acf_data: JSON.stringify({
        [acfCategory]: newCheckedCategoryItems,
      })
    },
    token,
    success: () => {
      dispatch({type: CHECK_ITEM_SUCCESS})
      MessageBarManager.showAlert({
        message: `${title} ${checked ? 'unchecked' : 'checked'}`,
        alertType: 'success',
      })
    },
    failure: (error) => {
      dispatch({type: CHECK_ITEM_FAILURE})
      // change checkbox state back if updating fails
      dispatch(setUser(user))
      MessageBarManager.showAlert({
        message: error && error.message ? error.message : 'Something went wrong. Please try again.',
        alertType: 'error',
      })
    }
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  categories: [],
  articles: [],
}

export default createReducer(initialState, {
  [GET_CATEGORIES_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_CATEGORIES_SUCCESS]: (state, {categories}) => ({
    loading: false,
    categories,
  }),
  [GET_CATEGORIES_FAILURE]: (state, action) => ({
    loading: false,
  }),
  [GET_ARTICLES_REQUEST]: (state, action) => ({
    loading: true,
  }),
  [GET_ARTICLES_SUCCESS]: (state, {articles}) => ({
    loading: false,
    articles,
  }),
  [GET_ARTICLES_FAILURE]: (state, action) => ({
    loading: false,
  }),
})
