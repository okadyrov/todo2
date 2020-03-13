import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import MyApp from './components/todo-list'
import ItemStatusFilter from './components/item-status-filter'

import './index.css'
    const App = () => {

    const todoData = [
        { label: 'Nalivai', important: false, id: 1 },
        { label: 'Zakusyvai', important: true, id: 2 },
        { label: 'Ne buhai', important: false, id: 3}
    ]



        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <MyApp todos={todoData} />
            </div>
        );
    };

ReactDOM.render(<App />,
    document.getElementById('root'))