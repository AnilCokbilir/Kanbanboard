import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AlltasksService } from '../alltasks.service';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { filter, map, Observable } from 'rxjs';
import { Xliff } from '@angular/compiler';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks$: Observable<any>;
  allTasksFire: any[] = [];
  done: any;
  doneList: any;
  todoList: any;
  todo: any;
  DragTodo: any;
  test: any;
  testtwo: any;
  constructor(public alltasks: AlltasksService, private firestore: Firestore) {

    const coll: any = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll);

    this.tasks$.subscribe((newTasks) => {
      console.log('Neue Tasks:', newTasks)
      this.allTasksFire = newTasks;
      this.test = this.allTasksFire.filter(t => t.object.Urgency == 'Medium')
      console.log('array', this.allTasksFire)
      console.log(this.test)
    })
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
