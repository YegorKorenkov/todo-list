import React, {Component} from 'react';
//import './App.css';

export default class App extends Component {

  state = {
    todoValue: "",
    todos: [],
    
  }



  addTodo(todoValue) {
    
    if (todoValue.trim()) {
      this.setState({
        todoValue: "",
        todos: [...this.state.todos, { text: todoValue, check: false }]
      })
    } else {
      alert("Write something");
      this.setState({todoValue: ""})
    }
  }

  removeTodo(todoKey) {
    this.setState({ todos: [...this.state.todos.filter((todo, key) => todo.check !== true)]})
  }

  todoChecked = (todo, key) => {
    const todos = [...this.state.todos]
    const isTodoCheck = todo.check
    todos[key].check = !isTodoCheck

    this.setState({
      todos: todos
    })
  }


  render () {
    return (

      <div>
        <input type="text" value={this.state.todoValue} onChange={e => this.setState({todoValue: e.target.value})}></input>
        <button onClick={ e => this.addTodo(this.state.todoValue)}>Click</button>
        
        <ul>
          {this.state.todos.map((todo, key) => <li key={key}>{todo.text}
            <input type='checkbox' checked={todo.check} onChange={e => this.todoChecked(todo, key)} ></input></li>)}
        </ul>

        <button onClick={e => this.removeTodo()}>Delete</button>
      </div>

    )
  }

}
