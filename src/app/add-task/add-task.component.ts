import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  urgencies = ['Low', 'Medium', 'High'];
  assignes = ['Anil Cokbilir', 'Florian Rehm', 'Junus Ergin', 'Kevin Wißmer', 'Mihai-Andrei Neacsu'];
  assignInput: any;
  title!: string;
  description!: string;
  dateInput!: any;
  urgency: any;
  urgencyInput: any;

  constructor(public allTasks: AlltasksService) { }

  ngOnInit(): void {
  }

  save() {
    let object = {
      'Title': this.title,
      'Description': this.description,
      'Assigned': this.assignInput,
      'Date': this.dateInput,
      'Urgency': this.urgencyInput,
      'Category': 'todo',
    }
    this.allTasks.tasks.push(object)
    console.log(this.allTasks.tasks)

    this.title = '';
    this.description = '';
    this.dateInput = '';
    this.urgencyInput = '';

  }

}
