import React from 'react';

const clear = (msg) =>{
    console.log('Clear Invoked');

    return ()=>{
        console.log('Inner Function Called'+msg);
    }
}

const Search = () => {

    return (
        <div >
   <button className="fa fa-search" 
           onClick={(event)=>{console.log(event)}}>Search</button>
   
           <button className="fa fa-crosshairs" 
           onClick={clear}>Clear</button>
   
           </div>
    );

}

export default Search;