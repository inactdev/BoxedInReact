import React from 'react'
import ReactDom from 'react-dom'

class Main extends React.Component {
  render() {
    return <p>Hello World!</p>
  }
}

ReactDom.render(
  <Main />,
  document.getElementById('app')
)
