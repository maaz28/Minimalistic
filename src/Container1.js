import React from 'react'
import InputField from './InputField';
import { Button } from 'semantic-ui-react';
import ButtonCustom from './ButtonCustom';

export default function Container1({handler}) {
  return (
    <div>
      <p>
        Your balance
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp; 234 &nbsp;
        </a>
        tokens
        </p>
      <InputField />
      <br />
      <br />
      <ButtonCustom handler = {handler} title = "Approve" />
    </div>
  )
}
