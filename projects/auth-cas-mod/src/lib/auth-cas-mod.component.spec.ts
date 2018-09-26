import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCasModComponent } from './auth-cas-mod.component';

describe('AuthCasModComponent', () => {
  let component: AuthCasModComponent;
  let fixture: ComponentFixture<AuthCasModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCasModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCasModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
