import { Component, EventEmitter, Output } from '@angular/core';


interface ITask {
  text: string,
  checked: boolean,
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAdd: EventEmitter<ITask> = new EventEmitter<ITask>();

  value: string = '';
  

  addTask(): void {
    if( this.value.trim() ) {
      const task: ITask = {
        text: this.value,
        checked: false,
      }
  
      this.onAdd.emit(task);
      this.value = '';
    }
  }

}
