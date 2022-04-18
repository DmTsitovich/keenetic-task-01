import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableRoutingModule} from "./table-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    HttpClientModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
