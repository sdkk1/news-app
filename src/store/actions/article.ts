import { Clip } from '../../types/article'

export const addClip = ({clip}: Clip) => {
  return {
    type: 'ADD_CLIP',
    clip
  }
}

export const deleteClip = ({clip}: Clip) => {
  return {
    type: 'DELETE_CLIP',
    clip
  }
}
