import { AnyAction } from 'redux'
import { Article } from '../../types/article'

const initialState = {
  clips: [] as Article[]
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clips: [...state.clips, action.clip]
      }
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter(e => e.url !== action.clip.url)
      }
    default:
      return state
  }
}

export default reducer
