import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { TableSecondComponent } from "./table-02/table-second.component";

const routes: Routes = [
  {
    path: '',
    component: TableSecondComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class TableSecondRoutingModule {

}
