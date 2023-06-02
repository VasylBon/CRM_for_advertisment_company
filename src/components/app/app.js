import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import EmployeesTitle from "../employees-title/employees-title";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    position: 1,
                    client: "Viva Pizza",
                    date: "2023-04-05",
                    type: "Друк",
                    product: "Флаєри",
                    amount: 1000,
                    payment: 550,
                    done: false,
                    id: 1,
                },
                {
                    position: 2,
                    client: "Uzhlight",
                    date: "2023-04-08",
                    type: "Дизайн",
                    product: "Вітрина",
                    amount: 1,
                    payment: 200,
                    done: false,
                    id: 2,
                },
                {
                    position: 3,
                    client: "Brandy",
                    date: "2023-04-12",
                    type: "Дизайн",
                    product: "Меню",
                    amount: 1,
                    payment: 300,
                    done: false,
                    id: 3,
                },
            ],
            maxId: 0,
        };
        this.state.maxId = this.state.data.length;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const updatedData = data.filter((item) => item.id !== id);
            const newData = updatedData.map((item, index) => ({
                ...item,
                position: index + 1,
                id: index + 1,
            }));

            return {
                data: newData,
                maxId: newData.length,
            };
        });
    };

    addItem = (client, date, type, product, amount, payment) => {
        const newItem = {
            position: this.state.maxId + 1,
            client,
            date,
            type,
            product,
            amount,
            payment,
            done: false,
            id: this.state.maxId + 1,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
                maxId: this.state.maxId + 1,
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

                <EmployeesTitle />
                <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
