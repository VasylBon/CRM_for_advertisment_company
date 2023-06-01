import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    client: "Viva Pizza",
                    type: "Друк",
                    payment: 550,
                    done: false,
                    id: 1,
                },
                {
                    client: "Uzhlight",
                    type: "Дизайн",
                    payment: 200,
                    done: false,
                    id: 2,
                },
                {
                    client: "Brandy",
                    type: "Дизайн",
                    payment: 300,
                    done: false,
                    id: 3,
                },
            ],
        };
        this.maxId = this.state.data.length;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (client, type, payment) => {
        const newItem = {
            client,
            type,
            payment,
            done: false,
            id: ++this.maxId,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
