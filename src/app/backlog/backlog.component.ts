import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  tasks$: Observable<any>;
  allTasksFire: any[] = [];
  expandedIndex = 0;
  constructor(public alltasks: AlltasksService, private firestore: Firestore) {

    const coll: any = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll);

    this.tasks$.subscribe((newTasks) => {
      console.log('Neue Tasks:', newTasks)
      this.allTasksFire = newTasks;
    })
  }

  ngOnInit(): void {
  }

  deletePos(i: any) {
    this.alltasks.tasks.splice(i, 1)
  }

}
