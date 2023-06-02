import "./search-panel.css";

const SearchPanel = () => {
    return (
        <input
            type="text"
            name="search"
            className="form-control search-input"
            placeholder="Знайти замовлення"
        />
    );
};

export default SearchPanel;
