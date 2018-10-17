import React, {Component} from 'react';




class Form extends Component {


    constructor() {
      super()
      this.state = {

      }
    }

  render() {
  let  {inputType, name, onChangeInput, placeholder} = this.props

    return(
      <form>
        <input name={name} type={inputType} onChange={onChangeInput} placeholder={placeholder} />
      </form>
    )
  }
}









export default Form
