import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.sass']
})
export class GridBaseComponent implements OnInit {

  private tiles = [
    {displayValue: "1", value: 0, position: 0},
    {displayValue: "2", value: 1, position: 1},
    {displayValue: "3", value: 2, position: 2},
    {displayValue: "4", value: 3, position: 3},
    {displayValue: "5", value: 4, position: 4},
    {displayValue: "6", value: 5, position: 5},
    {displayValue: "7", value: 6, position: 6},
    {displayValue: "8", value: 7, position: 7},
    {displayValue: "9", value: 8, position: 8},
    {displayValue: "10", value: 9, position: 9},
    {displayValue: "11", value: 10, position: 10},
    {displayValue: "12", value: 11, position: 11},
    {displayValue: "13", value: 12, position: 12},
    {displayValue: "14", value: 13, position: 13},    
    {displayValue: "", value: 15, position: 14, empty: true},
    {displayValue: "15", value: 14, position: 15}    
  ]
  // private tiles = [];
  private selectedTile = null;

  private options = {
    containerWidth: 460,
    containerHeight: 460,
    rows: 4,
    columns: 4
  }
  private tileWidth = 0;
  private tileHeight = 0;

  constructor() { }

  ngOnInit() {
    // this.tiles = this.initiateNumericTiles(); 
    this.tileWidth = this.options.containerWidth / this.options.rows
    this.tileHeight = this.options.containerHeight / this.options.columns
  }

  private performMove(tile) {
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

  private isValidMove(currentTileIndex, emptyTileIndex) {
    return currentTileIndex + 1 == emptyTileIndex ||
           currentTileIndex - 1 == emptyTileIndex ||
           currentTileIndex + this.options.columns == emptyTileIndex ||
           currentTileIndex - this.options.columns == emptyTileIndex 
  }

  private isSorted() {
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
    console.log("sorted: ", isSorted)
  }

  private initiateNumericTiles() {
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
}
