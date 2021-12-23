import React, { Component } from "react";
import Header from './views/Header'
import List from './views/List'
import Footer from './views/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: false },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打豆豆', done: false },
    ]
  }
  addTodo = val => {
    const { todos } = this.state
    const newTodos = [val, ...todos]
    this.setState({ todos: newTodos })
  }

  changeDone = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(v => {
      if (v.id === id) {
        return { ...v, done }
      } else {
        return v
      }
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(v => v.id !== id)
    this.setState({ todos: newTodos })
  }

  deleteAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(v => !v.done)
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="app">
        <Header addTodo={this.addTodo} />
        <List todos={todos} changeDone={this.changeDone} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} deleteAllDone={this.deleteAllDone} />
      </div>
    )
  }
}
