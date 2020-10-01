import { Component } from '@angular/core';


export interface IToDo {
  id: number,
  text: string,
  checked: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value: string = '';
  
  todos: Array<IToDo> = [
    {id: 1, text: 'Lorem1', checked: false},
    {id: 2, text: 'Lorem2', checked: true},
  ];


  addToTasks(task: {text: string, checked: boolean}): void {
    const id: number = +this.getId();

    this.todos.unshift({
      id,
      ...task
    });
  }

  getId(): number|never {
    for(let i = 1; i < 1000; i++) {
      if(this.todos.find(todo => todo.id === i) === undefined) {
        return i;
      }
    }

    throw new Error('Error');
  }

  removeTask(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  
  changeTask(id: number): void {
    this.todos.forEach(todo => {
      if(todo.id === id) {
        todo.checked = !todo.checked;
      }
    });
  }
}
