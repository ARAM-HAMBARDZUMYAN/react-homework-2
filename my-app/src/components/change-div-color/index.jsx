import React from "react";
import './style.scss'
class ChangeDivColor extends React.Component {
  state = {
    background: 'white'
  };
  constructor(props) {
    super();
   
  }
  changeBackground =() => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let background ="rgb(" + red + ", " + green + ", " + blue + ")";
    this.setState({background:background});
  };

  render() {

        return (
          <div style={{
            width: "300px",
            height:"600px",
            backgroundColor:this.state.background
          }}> 
            <button onClick={this.changeBackground}>Change color</button>
          </div>
        )   
      }
    }


export default ChangeDivColor