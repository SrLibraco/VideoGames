import React from "react";
import './Pagination.css'

export default function Pagination({gamesPerPage, currentPage, allGames, pagination}) {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++){
        pageNumber.push(i);
    }
    if(currentPage > pageNumber.length){
        pagination(1);
    };
    
    return(
        <div className="pagi">
            <button onClick={()=>pagination(currentPage===1 ? pageNumber.length : currentPage -1)}>  «  </button>
           
                {pageNumber && pageNumber.map(number => (
                <button key={number} onClick={()=> pagination(number)}>
                    {currentPage === number ? <b>{number}</b> : number}
                </button>
                ))
                }
            
            <button onClick={()=>pagination(currentPage === 0 ? currentPage : currentPage +1)}>  »  </button>
        </div>
    );
};