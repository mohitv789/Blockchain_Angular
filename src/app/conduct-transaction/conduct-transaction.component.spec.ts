import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductTransactionComponent } from './conduct-transaction.component';

describe('ConductTransactionComponent', () => {
  let component: ConductTransactionComponent;
  let fixture: ComponentFixture<ConductTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
