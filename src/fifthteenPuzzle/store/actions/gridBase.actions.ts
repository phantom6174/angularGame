import { Action } from '@ngrx/store';
import { fifthteenPuzzleState } from '../../fifthteenPuzzle.types'

export const GRID_SORTED = '[fifthteenPuzzle] GRID_SORTED';

export class GridSorted implements Action {
    readonly type = GRID_SORTED;
    constructor(public payload: fifthteenPuzzleState) {}
  }

export type GridBaseActions = GridSorted