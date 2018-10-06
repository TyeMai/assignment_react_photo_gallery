import React, {Component} from 'react';
import Select from './Select'

const instagramData = ['normal', 'valencia', 'fat']

class Form extends Component {

    constructor() {
      super()
      this.state = {

      }
    }

  render() {
    return(
      <form>
        <Select options={instagramData} name="input" value="fat"/>
      </form>
    )
  }
}









export default Form
