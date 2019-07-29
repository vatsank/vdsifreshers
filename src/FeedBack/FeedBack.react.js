import React from 'react';



const FeedBack = (props) => {

    return (
        <div >
<button  onClick={props.likeAction}>Like</button>
<button  onClick={props.disLikeAction}>DisLike</button>

        </div>
    );

}

export default FeedBack;