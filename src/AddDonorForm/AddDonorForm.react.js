import React from 'react';



const AddDonorForm = (props) => {

    return (
        <div >
        <form onSubmit={props.action.submit}>
        <label htmlFor="">Id</label>
        <input type="text" name="id" onChange={props.action.change}/>
        <label htmlFor="">Name</label>
        <input type="text" name="donorName" onChange={props.action.change}/>
        <label htmlFor="">Phone Number</label>
        <input type="text" name="phoneNumber" onChange={props.action.change}/>
        <label htmlFor="">Blood Group</label>
        <input type="text" name="bloodGroup" onChange={props.action.change}/>
        <label htmlFor="">Last Donated</label>
        <input type="date" name="lastDonated" onChange={props.action.change}/>
        <input type="submit"/>
    </form>
        </div>
    );

}

export default AddDonorForm;