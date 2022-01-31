import React, {useState} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


class App extends React.Component {

    state = {
        todos: [
            {label: 'Drink Coffee', important: false, id: 1, done: false},
            {label: 'Make Awesome App', important: true, id: 2, done: false},
            {label: 'Have a lunch', important: false, id: 3, done: false},
            {label: 'Drink vodka', important: true, id: 4, done: false},
            {label: 'Drink mohito', important: false, id: 5, done: false},
        ],
        filter: 'active',
    }


    onDelete = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((item) => item.id === id)

            const prev = oldState.todos.slice(0, idx)
            const next = oldState.todos.slice(idx + 1)

            return {
                todos: [...prev, ...next]
            }
        })
    }

    onDone = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((item) => item.id === id)
            const prev = oldState.todos.slice(0, idx)
            const done = oldState.todos[idx]
            const next = oldState.todos.slice(idx + 1)

            return {
                todos: [
                    ...prev,
                    {...done, done: !done.done},
                    ...next
                ]
            }

        })
    }

    onToggleImportant = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((item) => item.id === id)
            const prev = oldState.todos.slice(0, idx)
            const current = oldState.todos[idx]
            const next = oldState.todos.slice(idx + 1)
            return {
                todos: [
                    ...prev,
                    {...current, important: !current.important},
                    ...next
                ]
            }
        })
    }

    onToggleFilter = (status) => {
        this.setState({
            filter: status
        })
    }

    onStatusFilter = (todos, status) => {
        if (status === 'active') {
            return todos.filter((item) => item.done === false)
        } else if (status === 'done') {
            return todos.filter((item) => item.done === true)
        }else if (status==="important"){
            return todos.filter((item)=>item.important===true)
        }
        else {
            return todos
        }
    }

    onTodosFilterDone = (todos) => {
        return todos.filter((item) => item.done === true)
    }
    onTodosFilterMore = (todos) => {
        return todos.filter((item) => item.done === false)
    }


    render() {
        const filteredTodos = this.onStatusFilter(this.state.todos, this.state.filter)
        const done = Object.keys(this.onTodosFilterDone(this.state.todos)).length
        const more = Object.keys(this.onTodosFilterMore(this.state.todos)).length

        return (

            <div className="todo-app">
                <AppHeader toDo={more} done={done}/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter onToggleFilter={this.onToggleFilter}/>
                </div>

                <TodoList
                    onDelete={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onDone={this.onDone}
                    todos={filteredTodos}
                />
            </div>
        );
    }
}

export default App;
