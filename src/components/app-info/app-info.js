import "./app-info.scss";

const AppInfo = ({ maxId, active }) => {
    return (
        <div className="app-info">
            <h1>Програма прорахунку замовлень</h1>
            <h2>Загальна кількість замовлень: {maxId}</h2>
            <h2>Активні замовлення: {active}</h2>
        </div>
    );
};

export default AppInfo;
