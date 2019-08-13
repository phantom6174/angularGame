import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizerBaseComponent } from './randomizer-base.component';

describe('RandomizerBaseComponent', () => {
  let component: RandomizerBaseComponent;
  let fixture: ComponentFixture<RandomizerBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizerBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
