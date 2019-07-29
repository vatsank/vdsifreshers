import React from 'react';
import AddDonorForm from '../AddDonorForm/AddDonorForm.react';



class AddDonor extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            newDonor : {
                "id":0,
                "donorName":'',
                "bloodGroup":'',
                "phoneNumber":0,
                "lastDonated":''
            }
        }
    }
    handleSubmit=(event)=>{

        event.preventDefault();

        let url = "http://localhost:3000/bloodDonors";
       
        fetch(url,{
            method:"POST",
            body:JSON.stringify(this.state.newDonor),
            headers:{
                "Content-Type":"application/json"
            }
            
        }).then(resp=> console.log('Resource Created') );

    
    }
    handleChange = (event)=>{

        let name = event.target.name;
        let value =event.target.value;

        console.log(name+value);
        this.setState(prevState =>({newDonor: {...prevState.newDonor, [name] : value }}) );
    }

       actions={
           change:this.handleChange,
           submit:this.handleSubmit
       }
      render() {
        return (
            <div >

            <AddDonorForm action={this.actions}></AddDonorForm>
            </div>
        );
    }
}

export default AddDonor;