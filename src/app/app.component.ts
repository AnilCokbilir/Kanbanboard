import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlltasksService } from './alltasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanbanboard';

  constructor(public allTasksArray: AlltasksService, public router: Router) { }


}
