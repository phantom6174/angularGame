export interface exportedRandomizerState {
  randomizerState: randomizerState
}

export interface randomizerState {
  randomSelection: randomizerSelection
}

export interface randomizerSelection {
  name: string;
}