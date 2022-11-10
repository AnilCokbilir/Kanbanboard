import { Component, OnInit, ViewChild } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
import {
  Firestore,
  collectionData,
  collection,
  setDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  tasks$: Observable<any>;
  allTasksFire: any[] = [];
  // urgencies = ['Low', 'Medium', 'High'];
  urgencies = [
    {
      text: 'High',
      imgColor: '../../assets/img/highRed.png',
      imgWhite: '../../assets/img/highWhite.png',
      bgColor: '#FF3D00',
    },
    {
      text: 'Medium',
      imgColor: '../../assets/img/mediumYellow.png',
      imgWhite: '../../assets/img/mediumWhite.png',
      bgColor: '#FFA800',
    },
    {
      text: 'Low',
      imgColor: '../../assets/img/lowGreen.png',
      imgWhite: '../../assets/img/lowWhite.png',
      bgColor: '#7AE229',
    },
  ];
  assignes = [
    'Anil Cokbilir',
    'Florian Rehm',
    'Junus Ergin',
    'Kevin Wißmer',
    'Mihai-Andrei Neacsu',
  ];
  assignInput: any;
  title: string;
  description!: string;
  amount: number;
  dateInput!: any;
  urgency: any;
  urgencyInput: any;
  selected: string;

  @ViewChild('addTaskForm') addTaskForm: NgForm;

  constructor(public allTasks: AlltasksService, private firestore: Firestore) {
    const coll: any = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll);

    this.tasks$.subscribe((newTasks) => {
      console.log('Neue Tasks:', newTasks);
      this.allTasksFire = newTasks;
    });
  }

  ngOnInit(): void {}

  save() {
    let object = {
      Title: this.addTaskForm.value.title,
      Description: this.addTaskForm.value.description,
      Assigned: this.addTaskForm.value.assignInput,
      Date: this.addTaskForm.value.date.toLocaleDateString('de-DE'),
      Urgency: this.addTaskForm.value.urgencyInput,
      Category: 'todo',
    };
    console.log(object);
    console.log(this.addTaskForm);
    console.log(this.addTaskForm.value.urgencyInput);


    // let object = {
    //   Title: this.title,
    //   Description: this.description,
    //   Assigned: this.assignInput,
    //   Date: this.dateInput,
    //   Urgency: this.urgencyInput,
    //   Category: 'todo',
    // };
    // const coll = collection(this.firestore, 'tasks');
    // setDoc(doc(coll), { object });

    // // this.allTasks.tasks.push(object)
    // // console.log(this.allTasks.tasks)

    // this.title = '';
    // this.description = '';
    // this.dateInput = '';
    // this.urgencyInput = '';
  }
}
