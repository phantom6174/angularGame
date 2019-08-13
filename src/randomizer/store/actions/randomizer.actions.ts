import { Action } from '@ngrx/store';
import { randomizerSelection } from '../../randomizer.types'

export const SELECTION_PERFORMED = '[randomizer] SELECTION_PERFORMED';

export class SelectionPerformed implements Action {
    readonly type = SELECTION_PERFORMED;
    constructor(public payload: randomizerSelection) {}
  }

export type RandomizerActions = SelectionPerformed