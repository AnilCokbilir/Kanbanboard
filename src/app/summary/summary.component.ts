import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { AlltasksService } from '../alltasks.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],

})
export class SummaryComponent implements OnInit {
  now: number;
  currentDate = new Date();
  constructor(private firestore: Firestore, public allTasks: AlltasksService) {
    const coll: any = collection(firestore, 'tasks');
    this.allTasks.tasks$ = collectionData(coll);

    this.allTasks.tasks$.subscribe((newTasks) => {
      console.log('Neue Tasks:', newTasks)
      this.allTasks.allTasksFire = newTasks;
    })

    setInterval(() => {
      this.now = Date.now();
    }, 1);


  }

  ngOnInit(): void {
    console.log(this.allTasks.allTasksFire)
  }

}
