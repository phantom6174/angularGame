import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { randomizerState, randomizerSelection } from '../../randomizer.types';
import { SELECTION_PERFORMED } from '../../store/actions';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Component({
  selector: 'randomizer-base',
  templateUrl: './randomizer-base.component.html',
  styleUrls: ['./randomizer-base.component.sass']
})
export class RandomizerBaseComponent implements OnInit, OnDestroy {
  private default:randomizerSelection = {
    displayValue: 'No selection',
    animationClass: 'fifthteenPuzzle-default',
    isDefault: true,
    duration: 5};
  public selection = this.default;
  public numOfRotatingOptions = 6;
  public numOfTargetOption = 2;
  public rotatingOptions = Array(this.numOfRotatingOptions);

  private modes: randomizerSelection[] = [
    {
      displayValue: 'Too Slow?',
      transformedProp: 'rotate',
      increment: 180,
      unit: 'deg',
      duration: 6
    },
    {
      displayValue: 'Too Fast?',
      transformedProp: 'rotate',
      increment: 36,
      unit: 'deg',
      duration: 10
    },
    {
      displayValue: 'Lets go back',
      transformedProp: 'rotate',
      increment: -72,
      unit: 'deg',
      duration: 10
    },
    {
      displayValue: 'BACK!',
      transformedProp: 'rotate',
      increment: -180,
      unit: 'deg',
      duration: 6
    },
    {
      displayValue: 'What?',
      transformedProp: 'rotate',
      increment: 360,
      unit: 'deg',
      duration: 5
    },
    {
      displayValue: 'Lower the temperature!',
      animationClass: 'fifthteenPuzzle-vertical-tremble',
      duration: 5
    },
    {
      displayValue: 'Yes?',
      animationClass: 'fifthteenPuzzle-horizontal-tremble',
      duration: 5
    }    
  ]
  private randomizerInterval; 
  private selectionPerformed = false;
  private stabilize = false;

  constructor(private store: Store<randomizerState>) { }

  ngOnInit() {
    this.randomizerInterval = setInterval(()=>{
      this.performSelection();
      setTimeout(()=>{
        this.performSelection();
      }, this.selection.duration * 1000)

    }, 10000) // TODO: implement random or configurable interval

  }

  ngOnDestroy(){
    clearInterval(this.randomizerInterval);
  }
  
  performSelection(){
    if(!this.stabilize){
      this.selection = this.modes[Math.floor(Math.random()* this.modes.length)]
      this.store.dispatch({type: SELECTION_PERFORMED, payload: this.selection})
      this.stabilize = true  
    }else{
      this.selection = this.default  
      this.store.dispatch({type: SELECTION_PERFORMED, payload: this.selection})
      this.stabilize = false     
    }
}

}
