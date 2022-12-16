import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModifierFormComponent } from './product-modifier-form.component';

describe('ProductModifierFormComponent', () => {
  let component: ProductModifierFormComponent;
  let fixture: ComponentFixture<ProductModifierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductModifierFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductModifierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
