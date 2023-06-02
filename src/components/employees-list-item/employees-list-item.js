import React, { Component } from "react";

import "./employees-list-item.css";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            like: false,
        };
    }

    completeTask = () => {
        this.setState(({ done }) => ({
            done: !done,
        }));
    };

    hardWork = () => {
        this.setState(({ like }) => ({
            like: !like,
        }));
    };

    render() {
        const { position, client, date, type, product, amount, payment, onDelete } =
            this.props;
        const { done, like } = this.state;

        return (
            <li
                className={`list-group-item d-flex justify-content-between ${
                    done ? "done" : ""
                } ${like ? "like" : ""}`}
            >
                <span id="position" className="list-group-item-label">
                    {position}
                </span>
                <span
                    id="client"
                    className="list-group-item-label"
                    onClick={this.hardWork}
                >
                    {client}
                </span>
                <input
                    id="date"
                    type="date"
                    className="list-group-item-input"
                    defaultValue={date}
                />
                <span id="type" className="list-group-item-input">
                    {type}
                </span>
                <span id="product" className="list-group-item-input">
                    {product}
                </span>
                <span id="amount" className="list-group-item-input">
                    {amount}
                </span>
                <input
                    name="payment"
                    type="text"
                    className="list-group-item-input"
                    defaultValue={payment + "₴"}
                />
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="checked-field"
                        onClick={this.completeTask}
                    >
                        {done ? (
                            <i className="fa-solid fa-square-check"></i>
                        ) : (
                            <i className="fa-regular fa-square"></i>
                        )}
                    </button>

                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                    >
                        <i className="fa-solid fa-square-xmark"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;
