import { Component } from '@angular/core';
import { AlltasksService } from './alltasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanbanboard';

  constructor(public allTasksArray: AlltasksService) { }

}
