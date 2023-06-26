import "./employees-title.scss";

const EmployeesTitle = () => {
    return (
        <div className="order-info">
            <li className="list-group-item d-flex justify-content-between">
                <span className="list-group-item-label info data-position">№</span>
                <span className="list-group-item-label info data-client">
                    Клієнт
                </span>
                <span className="list-group-item-label info data-date">Дата</span>
                <span className="list-group-item-label info data-type">Вид</span>
                <span className="list-group-item-label info data-product">
                    Продукція
                </span>
                <span className="list-group-item-label info data-amount">К-ть</span>
                <span className="list-group-item-label info data-payment">
                    Вартість
                </span>
                <span className="list-group-item-label info data-status">
                    Статус
                </span>
            </li>
            ;
        </div>
    );
};

export default EmployeesTitle;
