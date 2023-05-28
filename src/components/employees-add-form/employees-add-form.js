import "./employees-add-form.css";

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Додати нове замовлення</h3>
            <form className="add-form d-flex">
                <input type="text" className="form-control new-post-label" placeholder="Замовник" />
                <input type="text" className="form-control new-post-label" placeholder="Вартість" />

                <button type="submit" className="btn btn-outline-light">
                    Додати
                </button>
            </form>
        </div>
    );
};

export default EmployeesAddForm;