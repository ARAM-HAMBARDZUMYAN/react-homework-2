import React from "react";
import './style.scss'
class ChangeTextFontsize extends React.Component {
  state = {
    inputValue: '',
    inputValue1:" ",
    result:"",
    result1:""
  };
  constructor(props) {
    super();
    console.log(props)
  }
 text= () => {
    this.setState({
      result:this.state.inputValue,
      result1:this.state.inputValue1
    });
  };
  render() {
    
    return (
      <div>
          <div>
      <label className='G-input-block-33'>
        <input name={'number1'}
                       placeholder={'number1'}
                       value={this.state.inputValue}
                       onChange={(e) =>this.setState({inputValue: e.target.value})}/>
      </label>
      <label className='G-input-block-33'>
        <input name={'number2'}
                       placeholder={'number2'}
                       value={this.state.inputValue1}
                       onChange={(e) =>this.setState({inputValue1: e.target.value})}/>
      </label>
    </div>
 <p style={{fontSize:this.state.result1+"px"}}>{this.state.result}</p>
        <button onClick={this.text} >Click Me</button>
      </div>
    );
  }
}


export default ChangeTextFontsize