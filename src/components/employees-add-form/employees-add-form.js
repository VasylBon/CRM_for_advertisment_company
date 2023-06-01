import React, { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: "",
            type: "",
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
        this.props.onAdd(this.state.client, this.state.type, this.state.payment);
        this.setState({
            client: "",
            type: "",
            payment: "",
        });
    };

    render() {
        const { client, type, payment } = this.state;

        return (
            <div className="app-add-form">
                <h3>Додати нове замовлення</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Замовник"
                        name="client"
                        value={client}
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
                        placeholder="Вартість"
                        name="payment"
                        value={payment}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Додати
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
