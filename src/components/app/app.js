import { useState, useEffect } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import EmployeesTitle from "../employees-title/employees-title";
import SearchPanel from "../search-panel/search-panel";

import logo from "../../img/logo.gif";
import "./app.scss";

const App = (props) => {
    const [data, setData] = useState([
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
    ]);
    const [maxId, setMaxId] = useState(0);
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const deleteItem = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        const newData = updatedData.map((item, index) => ({
            ...item,
            position: index + 1,
            id: index + 1,
        }));

        setData(newData);
        setMaxId(newData.length);
    };

    const addItem = (client, date, type, product, amount, payment) => {
        const newItem = {
            position: maxId + 1,
            client,
            date,
            type,
            product,
            amount,
            payment,
            done: false,
            print: false,
            id: maxId + 1,
        };

        setData([...data, newItem]);
        setMaxId(maxId + 1);
    };

    const onToggleProp = (id, prop) => {
        setData((prevData) => {
            return prevData.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            });
        });
    };

    const searchOrder = (words, term) => {
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

    const onUpdateSearch = (term) => {
        setTerm(term);
    };

    const filterOrder = (data, filter) => {
        switch (filter) {
            case "active":
                return data.filter((item) => item.done === false);
            case "done":
                return data.filter((item) => item.done === true);
            default:
                return data;
        }
    };

    const onUpdateFilter = (filter) => {
        setFilter(filter);
    };

    const active = data.filter((value) => !value.done).length;
    const visibleData = filterOrder(searchOrder(data, term), filter);

    return (
        <div className="app">
            {loading && (
                <div className="loader">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>
            )}

            {!loading && (
                <>
                    <AppInfo
                        maxId={maxId}
                        active={active}
                    />
                    <div className="search-panel">
                        <SearchPanel onUpdateSearch={onUpdateSearch} />
                        <AppFilter
                            filter={filter}
                            onUpdateFilter={onUpdateFilter}
                        />
                    </div>

                    <EmployeesTitle />
                    <EmployeesList
                        data={visibleData}
                        onDelete={deleteItem}
                        onToggleProp={onToggleProp}
                    />
                    <EmployeesAddForm onAdd={addItem} />
                </>
            )}
        </div>
    );
};

export default App;
