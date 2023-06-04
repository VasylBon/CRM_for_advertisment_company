import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { name: "all", label: "Всі замовлення" },
        { name: "active", label: "Активні" },
        { name: "done", label: "Завершені" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn-dark" : "btn-light";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onUpdateFilter(name)}
            >
                {label}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
