import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlltasksService {
  tasks: any[] = [];
  constructor() { }
}
