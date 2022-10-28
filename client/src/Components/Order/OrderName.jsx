/* import React from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../Redux/Actions/Actions";

function OrderName({videogames}) {
    const dispatch = useDispatch();

    

    function handleSort(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value));        
    }
    return (
        <div>
            <select onChange={e => handleSort(e)}>
                    <option value="alpha">Alphabetically Sort</option>
                    <option value="asc">Sort:  A - Z</option>
                    <option value="des">Sort:  Z - A</option>
            </select>
        </div>
    )
}

export default OrderName; */