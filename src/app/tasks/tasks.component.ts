import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IToDo } from '../app.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() todos: Array<IToDo>;

  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();


  removeTask(id: number): void {
    this.onRemove.emit(id);
  }

  changeTask(id: number): void {
    this.onChange.emit(id);
  }

}
