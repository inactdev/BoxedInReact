import React, { Component } from 'react'
import ReactGridLayout, { Responsive, WidthProvider } from 'react-grid-layout'
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

const layoutBuilder = () => {
  const coords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  return (
    coords.map((rowCoord, rowIndex) => {
      const row = coords.map((columnCoord, columnIndex) => {
        const key = rowCoord + columnCoord
        return {i: key, x: columnIndex, y: rowIndex, w: 1, h: 1, static: true}
      })
      return row
    })
  )
}

const divBuilder = () => {
  const coords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  return (
    coords.map((rowCoord, rowIndex) => {
      const row = coords.map((columnCoord, columnIndex) => {
        const key = rowCoord + columnCoord
        return <div key={key}>{key}</div>
      })
      return row
    })
  )
}

// var height = width * 1/cols;

const layout = [].concat.apply([], layoutBuilder());
const divLayout = [].concat.apply([], divBuilder());


class ReactGrid extends Component{
  constructor (props) {
    super(props);
    this.state = {
      rowHeight: 0
    };
  }

  handleWidthChange = (windowWidth) => {
    this.setState({rowHeight: windowWidth/15})
  }

  render () {
    const layouts = {
      lg: layout,
      md: layout,
      sm: layout,
      xs: layout,
      xxs: layout
    }

    return (
      <ResponsiveReactGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 10, md: 10, sm: 10, xs: 10, xxs: 10}}
        onWidthChange={this.handleWidthChange}
        rowHeight={this.state.rowHeight}>
        {divLayout}
      </ResponsiveReactGridLayout>
    )
  }
}

export default ReactGrid