import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsProductComponent } from './view-details-product.component';

describe('ViewDetailsProductComponent', () => {
  let component: ViewDetailsProductComponent;
  let fixture: ComponentFixture<ViewDetailsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDetailsProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDetailsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
