import React from 'react'
import { Loader } from 'semantic-ui-react'
import ButtonCustom from './ButtonCustom';

export default class Container2 extends React.Component {

  state = {
    isLoader: true
  }

  componentDidMount() {
    // add your blockchain function transfer function here remove settimeout
    setTimeout(() => {
      this.setState({
        isLoader: false
      })
    }, 3000);
  }

  handler = () => {

  }

  render() {
    return (
      <div>
        {
          this.state.isLoader ?
            <Loader active inline='centered'>Loading</Loader> :
            <ButtonCustom handler={this.handler} title="Transfer" />

        }
      </div>
    )
  }
}


