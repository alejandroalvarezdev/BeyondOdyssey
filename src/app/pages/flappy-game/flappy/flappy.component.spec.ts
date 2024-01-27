import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlappyComponent } from './flappy.component';

describe('FlappyComponent', () => {
  let component: FlappyComponent;
  let fixture: ComponentFixture<FlappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlappyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
