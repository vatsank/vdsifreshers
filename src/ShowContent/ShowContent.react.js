import React from 'react';
import abpos from '../abpos.png';
import ShowProfile from '../ShowProfile/ShowProfile.react';



const ShowContent = (props) => {

    return (
        <div >
<h2>{props.request.location}</h2>
<img src={props.request.imageRef} alt="logo"></img>
<ShowProfile></ShowProfile>
        </div>
    );

}

export default ShowContent;