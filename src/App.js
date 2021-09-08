import React, { Component } from "react";
import logo from './logo.svg';
import BlogItem from "./BlogCard";
import classes from "./BlogCard.module.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      cardData: [],
      num : 1
    };
    this.hideList = this.hideList.bind(this);
  }

  hideList = async () => {
    const response = await axios.get("https://reqres.in/api/users/?page="+this.state.num);
    this.setState({
      cardData: response.data.data,
      num : (this.state.num==2) ? 1 : 2 ,
    });
    // console.log("Api Response", this.state.cardData);
  };
  componentDidMount() {
    this.hideList();
  }

  render() {
    // console.log('Title State', this.state.showTitle);
    const cardData = this.state.cardData;
    const userCard = cardData.map((obj) => {
      return (
        <div className="col-md-3">
        <div className={classes.card + ' text-center mt-4'}>
          <img src={obj.avatar} className="mx-auto mt-2 text-center" alt="Avatar" />
          <div className={classes.container}>
            <h4>
              <b>
                
                  {obj.first_name} {obj.last_name}
              
              </b>
            </h4>
            <p>{obj.email}</p>
          </div>
        </div>
        </div>
      
      );
    });
    
    return (
      <div className="container">
        <div className="row">
          {userCard}
        </div>
         <div>
          <button onClick={this.hideList}>Next</button>
        </div> 
      </div>
    );  
   
  }
}

export default App;
