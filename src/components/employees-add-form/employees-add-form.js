import { useState } from "react";

import "./employees-add-form.scss";

const EmployeesAddForm = (props) => {
    const [client, setClient] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [product, setProduct] = useState("");
    const [amount, setAmount] = useState("");
    const [payment, setPayment] = useState("");

    const onValueChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "client":
                setClient(value);
                break;
            case "date":
                setDate(value);
                break;
            case "type":
                setType(value);
                break;
            case "product":
                setProduct(value);
                break;
            case "amount":
                setAmount(value);
                break;
            case "payment":
                setPayment(value);
                break;
            default:
                break;
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (client === "" || client.length < 3) {
            alert("Некоректо заповнене поле 'Клієнт'!");
            return;
        }

        if (date === "") {
            setDate(new Date().toISOString().slice(0, 10));
            alert(
                "Оскільки поле 'Дата' незаповнене, автоматично підставлено сьогоднішню дату!",
            );
            return;
        }

        if (type === "" || type.length < 3) {
            alert("Некоректо заповнене поле 'Вид'!");
            return;
        }

        if (product === "" || product.length < 3) {
            alert("Некоректо заповнене поле 'Продукція'!");
            return;
        }

        if (amount === "" || !/^\d+$/.test(amount) || amount.length > 5) {
            alert("Некоректо заповнене поле 'Кількість'!");
            return;
        }

        if (payment === "" || !/^\d+$/.test(payment) || payment.length > 5) {
            alert("Некоректо заповнене поле 'Вартість'!");
            return;
        }

        props.onAdd(client, date, type, product, amount, payment);
        setClient("");
        setDate("");
        setType("");
        setProduct("");
        setAmount("");
        setPayment("");
    };

    return (
        <div className="app-add-form">
            <div>
                <h3>Додати нове замовлення</h3>
            </div>
            <form
                className="add-form"
                onSubmit={onSubmit}
            >
                <div className="add-inputs">
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Замовник"
                        name="client"
                        value={client}
                        onChange={onValueChange}
                    />
                    <input
                        type="date"
                        className="form-control list-group-item-input"
                        placeholder="Дата початку"
                        name="date"
                        value={date}
                        onChange={onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Вид роботи"
                        name="type"
                        value={type}
                        onChange={onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Виріб"
                        name="product"
                        value={product}
                        onChange={onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Кількість"
                        name="amount"
                        value={amount}
                        onChange={onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Вартість"
                        name="payment"
                        value={payment}
                        onChange={onValueChange}
                    />
                </div>

                <div className="add-form-btn-container">
                    <button
                        type="submit"
                        className="add-form-btn btn btn-dark"
                    >
                        Додати
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmployeesAddForm;
