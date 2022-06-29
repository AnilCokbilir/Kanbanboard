import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  urgencies = ['Low', 'Medium', 'High'];
  title!: string;
  description!: string;
  dateInput!: Date;
  constructor(public allTasks: AlltasksService) { }

  ngOnInit(): void {
  }

  save() {
    let object = {
      'Title': this.title,
      'Description': this.description,
      'Date': this.dateInput
    }
    this.allTasks.tasks.push(object)
    console.log(this.allTasks.tasks)

    this.title = '';
    this.description = '';
  }

}
