import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AlltasksService } from '../alltasks.service';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { filter, map, Observable } from 'rxjs';
import { Xliff } from '@angular/compiler';
import { updateDoc } from "firebase/firestore";
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
  todoBoard: any;
  doneBoard: any;
  inprogressBoard: any;
  testingBoard: any;
  constructor(public alltasks: AlltasksService, public firestore: Firestore) {

    const coll: any = collection(firestore, 'tasks');
    this.tasks$ = collectionData(coll);

    this.tasks$.subscribe((newTasks) => {
      console.log('Neue Tasks:', newTasks)
      this.allTasksFire = newTasks;
      this.todoBoard = this.allTasksFire.filter(t => t.object.Category == 'todo');
      this.inprogressBoard = this.allTasksFire.filter(t => t.object.Category == 'inprogress');
      this.testingBoard = this.allTasksFire.filter(t => t.object.Category == 'testing');
      this.doneBoard = this.allTasksFire.filter(t => t.object.Category == 'done');
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

    this.filterBoard();
    this.filterInProgress();
    this.filterTesting();
    this.filterDone();

    console.log('array', this.allTasksFire)
    console.log('todo', this.todoBoard)
    console.log('done', this.doneBoard)


    // let test: any = collection(this.firestore, 'tasks');
    // test.collection('tasks').update(this.allTasksFire)

  }

  filterBoard() {
    for (let i = 0; i < this.todoBoard.length; i++) {
      this.todoBoard[i].object.Category = 'todo';
    }
  }

  filterInProgress() {
    for (let i = 0; i < this.inprogressBoard.length; i++) {
      this.inprogressBoard[i].object.Category = 'inprogess';
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
