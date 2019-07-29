import React from 'react';
import FeedBack from '../FeedBack/FeedBack.react';



class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            likeCount:1,
            unLikeCount:1
        }
    }
    incrementLikes=() =>{
        this.setState({likeCount:this.state.likeCount+1});

    }

    incrementDisLikes=() =>{
        this.setState({unLikeCount:this.state.unLikeCount+1});

    }
    render() {
        console.log('render called');
        return (
            <div >
           <article>
             <h1>Who can Donate Blood</h1>
             <p>You are eligible to donate blood if you are in good health, weigh at least 110 pounds and are 17 years or older.
You are not eligible to donate blood if you:
Have ever used self-injected drugs (non-prescription)
Had hepatitis
Are in a high-risk group for AIDS</p>
           </article>
           <p><span className='fa fa-thumbs-up'></span>{this.state.likeCount}</p>
           <p><span className='fa fa-thumbs-down'></span>{this.state.unLikeCount}</p>
           
           <FeedBack likeAction={this.incrementLikes} disLikeAction={this.incrementDisLikes}></FeedBack>
           </div>
        );
    }
}

export default Blog;