import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChecklistComponent } from './table-checklist.component';

describe('TableChecklistComponent', () => {
  let component: TableChecklistComponent;
  let fixture: ComponentFixture<TableChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
