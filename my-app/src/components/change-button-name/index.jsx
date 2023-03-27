import React from "react";
import './style.scss'
class ChangeButtonName extends React.Component {
  state = {
    buttonname: 'Click Me',
    inputValue:" "
  };
  constructor(props) {
    super();
    console.log(props)
  }
  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  changeState = () => {
    this.setState({
      buttonname:this.state.inputValue ,
    });
  };

  render() {
    const state = this.state;
    return (
      <div>
          <div>
      <label className='G-input'>
        <input name={'ButtonName'}
                       placeholder={'ButtonName'}
                       value={this.state.inputValue}
                       onChange={this.handleChange}/>
      </label>
    </div>
        <button onClick={this.changeState}>{state.buttonname}</button>
      </div>
    );
  }
}


export default ChangeButtonName