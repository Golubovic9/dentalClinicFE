import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtkazivanjeComponent } from './otkazivanje.component';

describe('OtkazivanjeComponent', () => {
  let component: OtkazivanjeComponent;
  let fixture: ComponentFixture<OtkazivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtkazivanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtkazivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
