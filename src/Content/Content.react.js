import React from 'react';
import ShowDonor from '../ShowDonor/ShowDonor.react';
import Search from '../Search/Search.react';
import Blog from '../Blog/Blog.react';
import AddDonor from  '../AddDonor/AddDonor.react';
import FetchDonors from '../FetchDonors/FetchDonors.react';
import LifeCycle from '../LifeCycle/LifeCycle.react';
import abpos from '../abpos.png';
import ShowContent from '../ShowContent/ShowContent.react';
const request ={
  bloodGroup:'abpos',
  requiredUnit:12,
  location:'chennai',
  imageRef:abpos
};
const Content = (props) => {

    return (
        <div >
           <h2>Current Request</h2>
          <ShowContent request={request}></ShowContent>
            </div>
    );

}

export default Content;