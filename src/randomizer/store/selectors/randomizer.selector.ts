import { createSelector, createFeatureSelector } from '@ngrx/store';
import { exportedRandomizerState, randomizerState, randomizerSelection } from '../../randomizer.types'



export const selectRandomizerState = createFeatureSelector<exportedRandomizerState>(
    'randomizerState'
  );

export const getRandomizerState = createSelector(
  selectRandomizerState,
  (state: exportedRandomizerState): randomizerState => state.randomizerState

);

export const selectRandomizerSelection = createSelector(
    getRandomizerState,
    (selection: randomizerState): randomizerSelection => selection.randomSelection
  );

