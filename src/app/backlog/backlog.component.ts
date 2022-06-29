import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  expandedIndex = 0;
  constructor(public alltasks: AlltasksService) { }

  ngOnInit(): void {
  }

  deletePos(i: any) {
    this.alltasks.tasks.splice(i, 1)
  }

}
