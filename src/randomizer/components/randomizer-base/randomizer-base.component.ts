import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { randomizerState } from '../../randomizer.types';
import { SELECTION_PERFORMED } from '../../store/actions';

@Component({
  selector: 'randomizer-base',
  templateUrl: './randomizer-base.component.html',
  styleUrls: ['./randomizer-base.component.sass']
})
export class RandomizerBaseComponent implements OnInit {

  private selection = {name: 'none'};
  private modes = [
    {
      name: 'Too Slow?'
    },
    {
      name: 'Too Fast?'
    },
    {
      name: 'What?'
    },
    // {
    //   name: 'Lower the temperature!'
    // }  
  ]
  private randomizerInterval; 

  constructor(private store: Store<randomizerState>) { } // Store<{ count: number }>

  ngOnInit() {

    this.randomizerInterval = setInterval(()=>{
      this.selection = this.modes[Math.floor(Math.random()* this.modes.length)]

      this.store.dispatch({type: SELECTION_PERFORMED, payload: this.selection})    

    }, 1000)

  }

}
