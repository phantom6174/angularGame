import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizerOptionComponent } from './randomizer-option.component';

describe('RandomizerOptionComponent', () => {
  let component: RandomizerOptionComponent;
  let fixture: ComponentFixture<RandomizerOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizerOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
