import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import MyApp from "../todo-list";
import React, { Component } from "react";

import './app.css'

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Nalivai', important: false, id: 1 },
            { label: 'Zakusyvai', important: true, id: 2 },
            { label: 'Ne buhai', important: false, id: 3}
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
               todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <MyApp
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}/>
            </div>
        );
    }


};
