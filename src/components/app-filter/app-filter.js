import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light" type="button">
                Всі замовлення
            </button>
            <button className="btn btn-outline-light" type="button">
                Активні
            </button>
            <button className="btn btn-outline-light" type="button">
                Завершені
            </button>
        </div>
    );
};

export default AppFilter;
