// import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

// 两种不同的组件声明方式

// 1.类class组件
// export default class Header extends Component {
//   static propTypes = {
//     addTodo: PropTypes.func
//   }
//   handleKeyUp = (e) => {
//     if (e.keyCode === 13 && e.target.value.trim()) {
//       const obj = {
//         name: e.target.value,
//         done: false,
//         id: Date.now()
//       }
//       this.props.addTodo(obj)
//       e.target.value = ''
//     }
//   }

//   render() {
//     return (
//       <div className='header'>
//         <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务，按enter键确认" />
//       </div>
//     )
//   }
// }

// 2.函数组件
const Header = props => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 13 && e.target.value.trim()) {
      const obj = {
        name: e.target.value,
        done: false,
        id: Date.now()
      }
      props.addTodo(obj)
      e.target.value = ''
    }
  }
  return (
    <div className='header'>
      <input onKeyUp={handleKeyUp} type="text" placeholder="请输入你的任务，按enter键确认" />
    </div>
  )
}
Header.propTypes = {
  addTodo: PropTypes.func
}
export default Header

