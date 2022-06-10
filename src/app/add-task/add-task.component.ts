import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  urgencies = ['Low', 'Medium', 'High'];
  constructor() { }

  ngOnInit(): void {
  }

}
