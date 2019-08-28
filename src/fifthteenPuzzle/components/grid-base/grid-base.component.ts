import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { fifthteenPuzzleState } from '../../fifthteenPuzzle.types';
import { selectRandomizerSelection } from '../../../randomizer/store/selectors/randomizer.selector';
import { randomizerState, randomizerSelection } from '../../../randomizer/randomizer.types';
import { fifthteenPuzzleTile, fifthteenPuzzleOptions } from '../../fifthteenPuzzle.types';
import { GRID_SORTED } from '../../store/actions';


@Component({
  selector: 'grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.sass']
})
export class GridBaseComponent implements OnInit {

  // private tiles: fifthteenPuzzleTile[] = [
  //   {displayValue: "1", value: 0, position: 0},
  //   {displayValue: "2", value: 1, position: 1},
  //   {displayValue: "3", value: 2, position: 2},
  //   {displayValue: "4", value: 3, position: 3},
  //   {displayValue: "5", value: 4, position: 4},
  //   {displayValue: "6", value: 5, position: 5},
  //   {displayValue: "7", value: 6, position: 6},
  //   {displayValue: "8", value: 7, position: 7},
  //   {displayValue: "9", value: 8, position: 8},
  //   {displayValue: "10", value: 9, position: 9},
  //   {displayValue: "11", value: 10, position: 10},
  //   {displayValue: "12", value: 11, position: 11},
  //   {displayValue: "13", value: 12, position: 12},
  //   {displayValue: "14", value: 13, position: 13},    
  //   {displayValue: "", value: 15, position: 14, empty: true},
  //   {displayValue: "15", value: 14, position: 15}    
  // ]
  private selectedTile: fifthteenPuzzleTile;
  private randomizerStateSubscription: randomizerState;
  private animationInProgress = false;

  private options: fifthteenPuzzleOptions = {
    containerWidth: 100,
    containerHeight: 100,
    rows: 4,
    columns: 4
  }
  public tiles: fifthteenPuzzleTile[] = [];
  public tileWidth = 100;
  public tileHeight = 100;
  public randomizerEffect: randomizerSelection;
  public transformedStyle: {
    'transform': string
    'transition-property'?: string};

  constructor(private store: Store<fifthteenPuzzleState>) { } // Store<{ count: number }>

  ngOnInit() {
    this.tiles = this.initiateNumericTiles(); 
    // this.tileWidth = this.options.containerWidth / this.options.rows
    // this.tileHeight = this.options.containerHeight / this.options.columns
     this.store
    .select(selectRandomizerSelection)
    .subscribe(value => {
      this.randomizerEffect = value  
      this.applyAnimation(this.randomizerEffect);
      }    
    )
  }

  private applyAnimation(effect: randomizerSelection): void{ // TODO: create constant rotation
    let duration = 0;
    let increment = effect.increment;
    if(effect.displayValue && !effect.animationClass && !this.animationInProgress){
      const interval = setInterval(()=>{
        this.animationInProgress = true;
        duration++;    
        this.transformedStyle = {transform: `
                                ${effect.transformedProp}(${increment + effect.unit})`}
        increment += effect.increment;
        if(duration == effect.duration){
          clearInterval(interval);
          setTimeout(()=>{
            this.transformedStyle = {
              'transition-property': 'none',
              transform: `${effect.transformedProp}(${0 + effect.unit})`}
            this.animationInProgress = false;
          }, 1000)
        }
      }, 1000)
    }

  }

  private isValidMove(currentTileIndex, emptyTileIndex): boolean  {
    return currentTileIndex + 1 == emptyTileIndex ||
           currentTileIndex - 1 == emptyTileIndex ||
           currentTileIndex + this.options.columns == emptyTileIndex ||
           currentTileIndex - this.options.columns == emptyTileIndex 
  }

  private isSorted(): void {
    let isSorted = false;
    for (let tile of this.tiles){      
      if(tile.value == tile.position){
        isSorted = true;    
      }
      else{
        isSorted = false;
        break
      }
    }
    if(isSorted){
      this.store.dispatch({type: GRID_SORTED, payload: {gridSorted: true}})   
      alert('Success animation in progress :)'); 
    }
  }

  private initiateNumericTiles(): fifthteenPuzzleTile[] {
    const amount = this.options.rows * this.options.columns;
    const initialTiles = [];
    const randomizedTiles = [];
    for (let tile = 0; tile < amount; tile++){
      const empty = tile == amount - 1;
      const displayValue = empty ? "" : `${tile + 1}`;
      initialTiles.push({displayValue: displayValue, value: 0, position: 0, empty: empty});
    }

    for (let tile = 0; tile < amount; tile++){
      const randomTileIndex = Math.floor(Math.random() * (initialTiles.length))
      initialTiles[randomTileIndex].position = tile;
      randomizedTiles.push(initialTiles[randomTileIndex]);
      initialTiles.splice(randomTileIndex, 1);
    }
    return randomizedTiles;
  }

  public performMove(tile): void {

    if(!this.selectedTile && !tile.empty){
      this.selectedTile = tile;
    }
    else if(this.selectedTile && tile.empty && this.isValidMove(tile.position, this.selectedTile.position)){  
      let tileInitialPosition = tile.position;
      let selectedTileInitialPosition = this.selectedTile.position;

      [this.tiles[tileInitialPosition], this.tiles[selectedTileInitialPosition]] = 
          [this.tiles[selectedTileInitialPosition], this.tiles[tileInitialPosition]]

      this.selectedTile.position = tileInitialPosition;
      tile.position = selectedTileInitialPosition;
      this.selectedTile = null;

      if(tileInitialPosition == this.tiles.length - 2 || 
         tileInitialPosition == this.tiles.length - ( this.options.columns + 1)){ // TODO: test well
        this.isSorted(); 
      }
    }
  }
}
