import React from 'react';



const Content = (props) => {

    return (
        <div >
           <h2>Current Request</h2>
           <h3>{props.request.location}</h3>
           <ol>
         <li><span><img src={props.request.imageRef} alt='abpos'/></span>{props.request.bloodGroup}</li>
            <li>{props.request.requiredUnit}</li>
            </ol>
           </div>
    );

}
{}
export default Content;