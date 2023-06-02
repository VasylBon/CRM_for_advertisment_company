import React, { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: "",
            date: "",
            type: "",
            product: "",
            amount: "",
            payment: "",
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(
            this.state.client,
            this.state.date,
            this.state.type,
            this.state.product,
            this.state.amount,
            this.state.payment,
        );
        this.setState({
            client: "",
            date: "",
            type: "",
            product: "",
            amount: "",
            payment: "",
        });
    };

    render() {
        const { client, date, type, product, amount, payment } = this.state;

        return (
            <div className="app-add-form">
                <div>
                    <h3>Додати нове замовлення</h3>
                </div>
                <form className="add-form" onSubmit={this.onSubmit}>
                    <div className="add-inputs">
                        <input
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Замовник"
                            name="client"
                            value={client}
                            onChange={this.onValueChange}
                        />
                        <input
                            type="date"
                            className="form-control list-group-item-input"
                            placeholder="Дата початку"
                            name="date"
                            value={date}
                            onChange={this.onValueChange}
                        />
                        <input
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Вид роботи"
                            name="type"
                            value={type}
                            onChange={this.onValueChange}
                        />
                        <input
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Виріб"
                            name="product"
                            value={product}
                            onChange={this.onValueChange}
                        />
                        <input
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Кількість"
                            name="amount"
                            value={amount}
                            onChange={this.onValueChange}
                        />
                        <input
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Вартість"
                            name="payment"
                            value={payment}
                            onChange={this.onValueChange}
                        />
                    </div>

                    <div className="add-form-btn-container">
                        <button type="submit" className="add-form-btn btn btn-dark">
                            Додати
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
