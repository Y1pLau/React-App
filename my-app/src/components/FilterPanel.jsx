export const FilterPanel = function ({selectIsDone,setSelectIsDone}) {
    const selectIsDoneHander=(event)=>{ 
        setSelectIsDone(event);
    };

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
            <select name="isDone" className="form-select w-25" aria-label="" value={toString(selectIsDone)} onChange={selectIsDoneHander()}>
                <option value="All" default>All</option>
                <option value="true">Completed</option>
                <option value="false">Incompleted</option>
            </select>
        </div>
    )
}
