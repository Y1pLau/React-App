export const FilterPanel = function () {
    return (
        <div className="my-2 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <span className="me-2">S</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search tasks..."
                    style={{ width: 200 }}
                />
            </div>
            
            {/* Right side select */}
            <select className="form-select w-25" aria-label="">
                <option value="All" default>All</option>
                <option value="Completed">Completed</option>
                <option value="Incompleted">Incompleted</option>
            </select>
        </div>
    )
}
