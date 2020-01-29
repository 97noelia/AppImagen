import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerUsuarioComponent } from './leer-usuario.component';

describe('LeerUsuarioComponent', () => {
  let component: LeerUsuarioComponent;
  let fixture: ComponentFixture<LeerUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
