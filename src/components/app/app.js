import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import EmployeesTitle from "../employees-title/employees-title";
import SearchPanel from "../search-panel/search-panel";

import logo from "../../img/logo.gif";
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
                    print: true,
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
                    print: false,
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
                    print: false,
                    id: 3,
                },
            ],
            maxId: 0,
            term: "",
            filter: "all",
            loading: true,
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

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2500);
    }

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
            print: false,
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

    onToggleProp = (id, prop) => {
        /*this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = { ...old, done: !old.done };
            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];

            return {
                data: newArr,
            };
        });*/
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    searchOrder = (words, term) => {
        if (term.length === 0) {
            return words;
        }

        return words.filter((word) => {
            const wordValue = word.client.toLowerCase();
            term = term.toLowerCase();

            for (let i = 0; i < term.length; ++i) {
                if (term[i] !== wordValue[i]) {
                    return false;
                }
            }
            return true;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filterOrder = (data, filter) => {
        switch (filter) {
            case "active":
                return data.filter((item) => item.done === false);
            case "done":
                return data.filter((item) => item.done === true);
            default:
                return data;
        }
    };

    onUpdateFilter = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter, loading } = this.state;
        const active = this.state.data.filter(
            (value) => value.done === false,
        ).length;
        const visibleData = this.filterOrder(this.searchOrder(data, term), filter);

        return (
            <div className="app">
                {loading && (
                    <div className="loader">
                        <img src={logo} alt="logo" />
                    </div>
                )}

                {!loading && (
                    <>
                        <AppInfo maxId={this.state.maxId} active={active} />
                        <div className="search-panel">
                            <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                            <AppFilter
                                filter={filter}
                                onUpdateFilter={this.onUpdateFilter}
                            />
                        </div>

                        <EmployeesTitle />
                        <EmployeesList
                            data={visibleData}
                            onDelete={this.deleteItem}
                            onToggleProp={this.onToggleProp}
                        />
                        <EmployeesAddForm onAdd={this.addItem} />
                    </>
                )}
            </div>
        );
    }
}

export default App;
