import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSorter } from './grid-sorter';

describe('GridSorter', () => {
  let component: GridSorter;
  let fixture: ComponentFixture<GridSorter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridSorter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSorter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
