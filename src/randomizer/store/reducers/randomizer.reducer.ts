import * as randomizerActions from '../actions/randomizer.actions';
import { randomizerState } from '../../randomizer.types'

export const initialState = {
  randomSelection: {
    name: 'none'
  }
}

export function reducer(
  state = initialState,
  action: randomizerActions.SelectionPerformed
): randomizerState {

  switch (action.type){
    case randomizerActions.SELECTION_PERFORMED:
      return {...state, 
        randomSelection: action.payload
      }
    default:
      return state
  }
}