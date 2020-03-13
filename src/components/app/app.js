import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import MyApp from "../todo-list";
import React from "react";

import './app.css'

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
export default App;