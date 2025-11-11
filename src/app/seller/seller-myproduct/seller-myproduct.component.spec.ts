import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMyproductComponent } from './seller-myproduct.component';

describe('SellerMyproductComponent', () => {
  let component: SellerMyproductComponent;
  let fixture: ComponentFixture<SellerMyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerMyproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerMyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
