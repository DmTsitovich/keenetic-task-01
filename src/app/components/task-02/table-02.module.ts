import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSecondRoutingModule} from "./table-02-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { TableSecondComponent } from './table-02/table-second.component';
import { FrmDialogService } from './services/dialog.servise';
import { MatDialog } from '@angular/material/dialog';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ModalComponent } from './modal-component/modal-component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgxMaskModule } from "ngx-mask";
import { TableDataHttpService } from './table-data.http-service';
import { CreateRouteComponent } from './create-route/create-route';

@NgModule({
  declarations: [
    TableSecondComponent,
    ModalComponent,
    InputComponent,
    CreateRouteComponent
  ],
  imports: [
    CommonModule,
    TableSecondRoutingModule,
    HttpClientModule,
    OverlayModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InlineSVGModule.forRoot(),
    NgxMaskModule.forRoot(),

  ],
  exports: [
    TableSecondComponent,
    ModalComponent,
    InputComponent,
    CreateRouteComponent
  ],
  providers: [FrmDialogService, MatDialog, TableDataHttpService]

})
export class TableSecondModule { }
