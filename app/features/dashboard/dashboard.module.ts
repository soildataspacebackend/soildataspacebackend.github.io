import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProvidersGridComponent } from './components/providers-grid/providers-grid.component';
import { ProviderTableListComponent } from './components/provider-table-list/provider-table-list.component';
import { ProviderTableItemComponent } from './components/provider-table-item/provider-table-item.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProvidersGridComponent,
    ProviderTableListComponent,
    ProviderTableItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
