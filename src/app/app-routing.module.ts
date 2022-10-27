import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { BacklogComponent } from './backlog/backlog.component';
import { BoardComponent } from './board/board.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'board', component: BoardComponent },
  { path: 'imprint', component: ImprintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
