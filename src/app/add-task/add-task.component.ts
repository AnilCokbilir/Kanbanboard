import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  tasks$: Observable<any>;
  allTasksFire: any[] = [];
  urgencies = ['Low', 'Medium', 'High'];
  assignes = ['Anil Cokbilir', 'Florian Rehm', 'Junus Ergin', 'Kevin Wißmer', 'Mihai-Andrei Neacsu'];
  assignInput: any;
  title!: string;
  description!: string;
  dateInput!: any;
  urgency: any;
  urgencyInput: any;

  constructor(public allTasks: AlltasksService, private firestore: Firestore) {

    const coll: any = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll);

    this.tasks$.subscribe((newTasks) => {
      console.log('Neue Tasks:', newTasks)
      this.allTasksFire = newTasks;
    })
  }

  ngOnInit(): void {
  }




  save() {
    let object = {
      'Title': this.title,
      'Description': this.description,
      'Assigned': this.assignInput,
      'Date': new Date(this.dateInput).toLocaleString('en-GB'),
      'Urgency': this.urgencyInput,
      'Category': 'todo',
    }
    const coll = collection(this.firestore, 'tasks');
    setDoc(doc(coll), { object })

    // this.allTasks.tasks.push(object)
    // console.log(this.allTasks.tasks)

    // this.title = '';
    // this.description = '';
    // this.dateInput = '';
    // this.urgencyInput = '';
  }



}
