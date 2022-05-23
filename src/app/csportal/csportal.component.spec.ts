import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsportalComponent } from './csportal.component';

describe('CsportalComponent', () => {
  let component: CsportalComponent;
  let fixture: ComponentFixture<CsportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
