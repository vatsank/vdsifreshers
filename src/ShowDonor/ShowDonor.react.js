import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react';
import PropTypes from 'prop-types';

let donorList =[
    {donorName:"ramesh",phoneNumber:9494949,bloodGroup:"opos",donationCount:45},
    {donorName:"rajesh",phoneNumber:7497949,bloodGroup:"bpos",donationCount:55},
    {donorName:"rakesh",phoneNumber:9392949,bloodGroup:"apos",donationCount:52}
    
];


const ShowDonor = (props) => {

    return (
        <div >
        <h1 className='text-center'>{props.title}</h1>
     <DataGrid donorList={donorList}>
      <thead>
       <tr>
        <th>Donor Name</th>
        <th>Phone Number</th>
        <th>Blood Group</th>
       </tr>
      </thead>
     </DataGrid>
        </div>
    );

}
ShowDonor.propTypes= {
    title:PropTypes.string.isRequired

};
export default ShowDonor;