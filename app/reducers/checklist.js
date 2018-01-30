import createReducer from '../createReducer'
import { getToken } from './user'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CATEGORIES_REQUEST = 'Checklist.GET_CATEGORIES_REQUEST'
export const GET_CATEGORIES_SUCCESS = 'Checklist.GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'Checklist.GET_CATEGORIES_FAILURE'

export const GET_ARTICLES_REQUEST = 'Checklist.GET_ARTICLES_REQUEST'
export const GET_ARTICLES_SUCCESS = 'Checklist.GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAILURE = 'Checklist.GET_ARTICLES_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getCategories = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_CATEGORIES_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/learn_categories/`, {
    method: 'GET',
    token,
    success: (categories) => dispatch({type: GET_CATEGORIES_SUCCESS, categories}),
    failure: (error) => dispatch({type: GET_CATEGORIES_FAILURE, error}),
  })
}

export const getArticles = () => (dispatch, getState, {fetch}) => {
  dispatch({type: GET_ARTICLES_REQUEST})
  const {token} = dispatch(getToken())
  return fetch(`/learn/`, {
    method: 'GET',
    token,
    success: (articles) => dispatch({type: GET_ARTICLES_SUCCESS, articles}),
    failure: (error) => dispatch({type: GET_ARTICLES_FAILURE, error}),
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
