import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc } from 'firebase/firestore';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  dragedTask: any;
  tasks$: Observable<any>;
  allTasksFire: any[] = [];
  expandedIndex = 0;
  constructor(public alltasks: AlltasksService, private firestore: Firestore) {

    const coll = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll, { idField: 'customIdName' });
    this.tasks$.subscribe((newTasks) => {
      newTasks = newTasks.map((t: any) => {
        t.object['customIdName'] = t.customIdName;
        return t;
      });
      console.log('Neue Tasks:', newTasks);
      this.allTasksFire = newTasks;
    })
  }

  ngOnInit(): void {
  }

  deletePos(event: any, tasks: any) {
    console.log(event, tasks);
    this.dragedTask = tasks;
    let collRef = collection(this.firestore, 'tasks');
    let docRef = doc(collRef, this.dragedTask.customIdName);
    console.log(this.dragedTask);
    deleteDoc(docRef);
  }

}
