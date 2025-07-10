export const FilterPanel = function ({selectIsDone,setSelectIsDone}) {
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
             <select name="isDone" className="form-select w-25" aria-label="" value={selectIsDone} onChange={e=>setSelectIsDone(e.target.value)}>
                <option value="all" >All</option>
                <option value="true" >Completed</option>
                <option value="false">Incompleted</option>
            </select>
        </div>
    )
}
