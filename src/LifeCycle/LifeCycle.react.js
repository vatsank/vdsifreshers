import React from 'react';
import ReactDOM  from 'react-dom';
import ShowCity from '../ShowCity/ShowCity.react';


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'Suresh',
            city:'chennai'
        }
        // create a stateless componet showCity which
        //takes a prop city and display the same
        // when the  state property city changes 
        // observe showCity render is also called

        console.log('Constructor Called ***********')
    }
      componentDidMount(){
          console.log("DID MOUNT CALLED ======");

        //   const element = ReactDOM.findDOMNode(this);
 
        //   const child = element.firstChild;
           
        //   ReactDOM.render("Ramesh",child);

      }
      shouldComponentUpdate(){
          return true;
      }
      change = ()=>{
          console.log("change fired");
        this.setState({name:this.state.name+'ji',city:"mumbai"});

      }

      componentDidUpdate(){
          console.log("DID UPDATE CALLED @@@@@@@@@")
      }
    render() {
        console.log("Render Method Called ########")
  
        return (
            <div>
          <h2>{this.state.name}</h2>
          <ShowCity city={this.state.city}></ShowCity>

          <button onClick={this.change}>Update</button>
            </div>
        );
    }
}


export default LifeCycle;