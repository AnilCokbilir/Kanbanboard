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
      className: 'high',
      hovered: false,
    },
    {
      text: 'Medium',
      imgColor: '../../assets/img/mediumYellow.png',
      imgWhite: '../../assets/img/mediumWhite.png',
      bgColor: '#FFA800',
      className: 'medium',
      hovered: false,
    },
    {
      text: 'Low',
      imgColor: '../../assets/img/lowGreen.png',
      imgWhite: '../../assets/img/lowWhite.png',
      bgColor: '#7AE229',
      className: 'low',
      hovered: false,
    },
  ];
  assignes = [
    'Anil Cokbilir',
    'Florian Rehm',
    'Junus Ergin',
    'Kevin Wißmer',
    'Mihai-Andrei Neacsu',
  ];
  categories = [
    {
      text: 'Development',
      color: '#2A3647',
    },
    {
      text: 'Sales',
      color: '#8AA4FF',
    },
    {
      text: 'Design',
      color: '#8AA4FF',
    },
    {
      text: 'Backoffice',
      color: '#1FD7C1',
    },
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
      Section: this.addTaskForm.value.categoryInput,
    };
    console.log(object);

    const coll = collection(this.firestore, 'tasks');
    setDoc(doc(coll), {object});

    this.allTasks.allTasksFire.push(object);
    this.addTaskForm.reset();
    // const coll = collection(this.firestore, 'tasks');
    // setDoc(doc(coll), { object });

    // this.allTasks.tasks.push(object)
    // console.log(this.allTasks.tasks)

    // this.title = '';
    // this.description = '';
    // this.dateInput = '';
    // this.urgencyInput = '';
  }
}
