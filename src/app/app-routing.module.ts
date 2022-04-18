import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () => import('src/app/components/task-01/table.module').then(m => m.TableModule)
  },
  {
    path: 'second-table',
    loadChildren: () => import('src/app/components/task-02/table-02.module').then(m => m.TableSecondModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
