import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AlltasksService } from '../alltasks.service';
import { Firestore, collectionData, collection, setDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { filter, map, Observable } from 'rxjs';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  dragedTask: any;
  tasks$: Observable<any>;
  allTasksFire: any[] = [];
  done: any;
  doneList: any;
  todoList: any;
  todo: any;
  DragTodo: any;
  todoBoard: any;
  doneBoard: any;
  inprogressBoard: any;
  testingBoard: any;
  constructor(public alltasks: AlltasksService, public firestore: Firestore) {

    const coll = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll, { idField: 'customIdName' });

    this.tasks$.subscribe((newTasks) => {
      newTasks = newTasks.map((t: any) => {
        t.object['customIdName'] = t.customIdName;
        return t;
      });
      console.log('Neue Tasks:', newTasks);
      this.allTasksFire = newTasks;
      this.todoBoard = this.allTasksFire.filter(t => t.object.Category == 'todo');
      this.inprogressBoard = this.allTasksFire.filter(t => t.object.Category == 'inprogress');
      this.testingBoard = this.allTasksFire.filter(t => t.object.Category == 'testing');
      this.doneBoard = this.allTasksFire.filter(t => t.object.Category == 'done');
      console.log(this.inprogressBoard);
    })
  }

  ngOnInit(): void {

  }

  onDragStarted(event: any, task: any) {
    console.log(event, task);
    this.dragedTask = task;
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

      this.filterBoard();
      this.filterInProgress();
      this.filterTesting();
      this.filterDone();

      let collRef = collection(this.firestore, 'tasks');
      let docRef = doc(collRef, this.dragedTask.customIdName);
      console.log(this.dragedTask);
      setDoc(docRef, { object: this.dragedTask.object });

    }



    console.log('array', this.allTasksFire)
    console.log('todo', this.todoBoard)
    console.log('done', this.doneBoard)


    // let test = collection(this.firestore, 'tasks');

    //  test.collection('tasks').update(this.allTasksFire)
  }

  filterBoard() {
    for (let i = 0; i < this.todoBoard.length; i++) {
      this.todoBoard[i].object.Category = 'todo';
    }
  }

  filterInProgress() {
    for (let i = 0; i < this.inprogressBoard.length; i++) {
      this.inprogressBoard[i].object.Category = 'inprogress';
    }
  }

  filterTesting() {
    for (let i = 0; i < this.testingBoard.length; i++) {
      this.testingBoard[i].object.Category = 'testing';
    }
  }

  filterDone() {
    for (let i = 0; i < this.doneBoard.length; i++) {
      this.doneBoard[i].object.Category = 'done';
    }
  }


}
