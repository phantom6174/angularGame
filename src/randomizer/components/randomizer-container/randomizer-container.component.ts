import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'randomizer-container',
  templateUrl: './randomizer-container.component.html',
  styleUrls: ['./randomizer-container.component.sass']
})
export class RandomizerContainerComponent implements OnInit {

  @Input() tile;
  @Input() tileWidth: number;
  @Input() tileHeight: number;
  @Output() registerSelectedTile = new EventEmitter();

  private width = "";
  private height = "";

  ngOnInit() {
    this.width = `${this.tileWidth - 4}px`
    this.height = `${this.tileHeight - 4}px`
  }

  tileSelected(tile){
    this.registerSelectedTile.emit(tile)
  }

}
