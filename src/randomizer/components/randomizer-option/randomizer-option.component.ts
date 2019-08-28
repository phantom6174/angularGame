import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'randomizer-option',
  templateUrl: './randomizer-option.component.html',
  styleUrls: ['./randomizer-option.component.sass']
})
export class RandomizerOptionComponent implements OnInit {

  @Input() displayValue;

  public width = "";
  public height = "";

  ngOnInit() {  }
}
