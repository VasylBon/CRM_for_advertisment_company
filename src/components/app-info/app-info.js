import "./app-info.css";

const AppInfo = ({ maxId, data }) => {
    const active = data.filter((value) => value.done === false);

    return (
        <div className="app-info">
            <h1>Програма прорахунку замовлень</h1>
            <h2>Загальна кількість замовлень: {maxId}</h2>
            <h2>Активні замовлення: {active.length}</h2>
        </div>
    );
};

export default AppInfo;
