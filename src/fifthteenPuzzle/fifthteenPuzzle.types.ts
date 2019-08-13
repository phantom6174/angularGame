export interface fifthteenPuzzleState {
    gridSorted: boolean;
}


export interface fifthteenPuzzleTile {
  displayValue: string | number;
  value: number;
  position: number;
  empty?: boolean
}

export interface fifthteenPuzzleOptions {
  containerWidth: number;
  containerHeight: number;
  rows: number;
  columns: number
}
