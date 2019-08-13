import * as gridBaseActions from '../actions/gridBase.actions';
import { fifthteenPuzzleState } from '../../fifthteenPuzzle.types'

export const initialState = {
    gridSorted: false
  };

export function reducer(
  state = initialState,
  action: gridBaseActions.GridBaseActions
): fifthteenPuzzleState {

  switch (action.type){
    case gridBaseActions.GRID_SORTED:
      return {...state, gridSorted: action.payload.gridSorted}
  }
  

  return state;
}