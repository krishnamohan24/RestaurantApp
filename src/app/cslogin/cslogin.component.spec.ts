import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsloginComponent } from './cslogin.component';

describe('CsloginComponent', () => {
  let component: CsloginComponent;
  let fixture: ComponentFixture<CsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
