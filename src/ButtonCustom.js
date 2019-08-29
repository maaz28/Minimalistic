import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonCustom = ({ handler, title }) => (
  <Button animated content='Primary' primary onClick={handler}>
    <Button.Content visible>{title}</Button.Content>
    <Button.Content hidden>
      <Icon name='arrow right' />
    </Button.Content>
  </Button>
)

export default ButtonCustom
