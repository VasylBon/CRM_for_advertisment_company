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
        const { client, type, payment, onDelete } = this.props;
        const { done, like } = this.state;

        return (
            <li
                className={`list-group-item d-flex justify-content-between ${
                    done ? "done" : ""
                } ${like ? "like" : ""}`}
            >
                <span className="list-group-item-label" onClick={this.hardWork}>
                    {client}
                </span>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={type}
                />
                <input
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
