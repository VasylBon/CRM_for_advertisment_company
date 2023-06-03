import React, { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
        };
    }

    onUpdateFilter = (changedFilter) => {
        this.setState({ filter: changedFilter });
        this.props.onUpdateFilter(changedFilter);
    };

    render() {
        const { filter } = this.state;

        return (
            <div className="btn-group">
                <button
                    className={`btn ${
                        filter === "all" ? "btn-dark" : "btn btn-light"
                    } `}
                    type="button"
                    onClick={() => this.onUpdateFilter("all")}
                >
                    Всі замовлення
                </button>
                <button
                    className={`btn ${
                        filter === "active" ? "btn-dark" : "btn btn-light"
                    } `}
                    type="button"
                    onClick={() => this.onUpdateFilter("active")}
                >
                    Активні
                </button>
                <button
                    className={`btn ${
                        filter === "done" ? "btn-dark" : "btn btn-light"
                    } `}
                    type="button"
                    onClick={() => this.onUpdateFilter("done")}
                >
                    Завершені
                </button>
            </div>
        );
    }
}

export default AppFilter;
