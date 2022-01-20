import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplikasiBerandaComponent } from './aplikasi-beranda.component';

describe('AplikasiBerandaComponent', () => {
  let component: AplikasiBerandaComponent;
  let fixture: ComponentFixture<AplikasiBerandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplikasiBerandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplikasiBerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
