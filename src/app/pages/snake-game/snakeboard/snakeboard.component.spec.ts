import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeboardComponent } from './snakeboard.component';

describe('SnakeboardComponent', () => {
  let component: SnakeboardComponent;
  let fixture: ComponentFixture<SnakeboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnakeboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnakeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
