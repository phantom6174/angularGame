import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizerContainerComponent } from './randomizer-container.component';

describe('RandomizerContainerComponent', () => {
  let component: RandomizerContainerComponent;
  let fixture: ComponentFixture<RandomizerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
