import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  constructor(public alltasks: AlltasksService) { }

  ngOnInit(): void {
  }

}
