import React from 'react';
import PropTypes from 'prop-types';



const DataGrid = (props) => {

    console.log(props.donorList[0]);
    return (
        <div >
        <table className='table table-striped'>
        {props.children}
        <tbody>
         {
             props.donorList.map((eachDonor,index)=>{
                 return <tr key={index}>
                    <td>{eachDonor.donorName}</td>
                    <td>{eachDonor.bloodGroup}</td>
                    <td>{eachDonor.phoneNumber}</td>
                 </tr>
             })
         }
         </tbody>
        </table>
        
        </div>
    );

}
let Donor = PropTypes.shape({

    donorName:PropTypes.string.isRequired,
        bloodGroup:PropTypes.oneOf(['apos','bpos','opos']),
        phoneNumber:PropTypes.number.isRequired
   
});

DataGrid.propTypes ={

    donorList:PropTypes.arrayOf(Donor).isRequired
         }

export default DataGrid;
