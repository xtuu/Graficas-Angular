import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasDoublesComponent } from './barras-doubles.component';

describe('BarrasDoublesComponent', () => {
  let component: BarrasDoublesComponent;
  let fixture: ComponentFixture<BarrasDoublesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasDoublesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrasDoublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
