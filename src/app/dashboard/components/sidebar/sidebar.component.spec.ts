// src/app/dashboard/components/sidebar/sidebar.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcicSidebarComponent } from './sidebar.component';

describe('PcicSidebarComponent', () => {
  let component: PcicSidebarComponent;
  let fixture: ComponentFixture<PcicSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcicSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PcicSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
