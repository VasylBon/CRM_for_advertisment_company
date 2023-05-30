import React, { useState } from "react";
import "./employees-list-item.css";

const EmployeesListItem = ({ name, salary, done }) => {
    const [isHovered, setIsHovered] = useState(done);

    const handleToggle = () => {
        setIsHovered((prevState) => !prevState);
    };

    return (
        <li className={`list-group-item d-flex justify-content-between ${isHovered ? "done" : ""}`}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="checked-field" onClick={handleToggle}>
                    {isHovered ? (
                        <i class="fa-solid fa-square-check"></i>
                    ) : (
                        <i class="fa-regular fa-square"></i>
                    )}
                </button>

                <button type="button" className="btn-trash btn-sm">
                    <i class="fa-solid fa-square-xmark"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;
