import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlltasksService {
  allTasksFire: any[] = [];
  loggedIn: boolean = false;
  tasks$: Observable<any>;
  constructor(private firestore: Firestore) {
    const coll: any = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll);

    this.tasks$.subscribe((newTasks) => {
      console.log('Neue Tasks:', newTasks)
      this.allTasksFire = newTasks;
    })
  }


}
