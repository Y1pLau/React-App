import { useRef } from 'react';
export const FilterPanel = function ({filterTask,setFilterTask}) {
    const inputRef = useRef();
    return (
        <div className="my-2 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Search tasks..."
                    style={{ width: 200 }}

                />
                <button className="btn btn-primary ms-2" type="button" onClick={(e)=>setFilterTask({...filterTask,title:inputRef.current.value})}>Search</button>
            </div>
             <select name="isDone" className="form-select w-25" aria-label="" value={filterTask.isDone} onChange={e=>setFilterTask({...filterTask,isDone:e.target.value})}>
                <option value="all" >All</option>
                <option value="true" >Completed</option>
                <option value="false">Incompleted</option>
            </select>
        </div>
    )
}
