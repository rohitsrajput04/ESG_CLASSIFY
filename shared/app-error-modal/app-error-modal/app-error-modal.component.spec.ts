import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppErrorModalComponent } from './app-error-modal.component';

describe('AppErrorModalComponent', () => {
  let component: AppErrorModalComponent;
  let fixture: ComponentFixture<AppErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppErrorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
