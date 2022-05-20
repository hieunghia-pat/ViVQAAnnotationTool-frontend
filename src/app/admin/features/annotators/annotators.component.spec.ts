import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsComponent } from './annotators.component';

describe('AnnotatorsComponent', () => {
  let component: AnnotatorsComponent;
  let fixture: ComponentFixture<AnnotatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
