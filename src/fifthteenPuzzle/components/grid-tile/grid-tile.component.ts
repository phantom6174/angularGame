import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'grid-tile',
  templateUrl: './grid-tile.component.html',
  styleUrls: ['./grid-tile.component.sass']
})
export class GridTileComponent implements OnInit {

  @Input() tile;
  @Input() tileWidth: number;
  @Input() tileHeight: number;
  @Output() registerSelectedTile = new EventEmitter();

  public width = "";
  public height = "";

  ngOnInit() {
    this.width = `${this.tileWidth - 4}px`
    this.height = `${this.tileHeight - 4}px`
  }

  tileSelected(tile){
    this.registerSelectedTile.emit(tile)
  }

}
