import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTableListComponent } from './provider-table-list.component';

describe('ProviderTableListComponent', () => {
  let component: ProviderTableListComponent;
  let fixture: ComponentFixture<ProviderTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderTableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
