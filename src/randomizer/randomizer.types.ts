export interface exportedRandomizerState {
  randomizerState: randomizerState
}

export interface randomizerState {
  randomSelection: randomizerSelection
}

export interface randomizerSelection {
  displayValue: string | boolean;
  duration: number;
  animationClass?: string;
  isDefault?: boolean;
  transformedProp?: 'rotate' | 'translate';
  unit?: string;
  increment?: number;
}