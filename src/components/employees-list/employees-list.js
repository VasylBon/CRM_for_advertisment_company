import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
const EmployeesList = ({ data }) => {
    const elements = data.map((value) => {
        return <EmployeesListItem name={value.name} salary={value.salary} />;
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
