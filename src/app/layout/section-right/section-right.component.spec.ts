import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRightComponent } from './section-right.component';

describe('SectionRightComponent', () => {
  let component: SectionRightComponent;
  let fixture: ComponentFixture<SectionRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SectionRightComponent]
    });
    fixture = TestBed.createComponent(SectionRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
