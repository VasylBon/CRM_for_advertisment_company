import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    const {
        position,
        client,
        date,
        type,
        product,
        amount,
        payment,
        onDelete,
        onToggleProp,
        done,
        print,
    } = props;

    return (
        <li
            className={`list-group-item d-flex justify-content-between ${
                done ? "done" : ""
            } ${print ? "print" : ""}`}
        >
            <span id="position" className="list-group-item-label">
                {position}
            </span>
            <span
                id="client"
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="print"
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
            <span id="payment" className="list-group-item-input">
                {payment + "₴"}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="checked-field"
                    onClick={onToggleProp}
                    data-toggle="done"
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
                <i className="fas fa-print"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;
