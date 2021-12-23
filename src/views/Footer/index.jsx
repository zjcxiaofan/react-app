import React from "react"
import PropTypes from "prop-types"
import "./index.css"

const Footer = (props) => {
  const { todos, deleteAllDone, checkedAll } = props
  const doneTodo = todos.filter((v) => v.done === true)
  const done = doneTodo.length === todos.length
  return (
    <div className='footer'>
      <input type='checkbox' checked={done} onChange={checkedAll} />
      <span style={{ fontSize: "14px" }}>
        <span style={{ paddingLeft: "10px" }}>已完成 {doneTodo.length} </span>
        /&nbsp;&nbsp;
        <span>全部 {todos.length} </span>
      </span>
      <button style={{ float: "right" }} onClick={deleteAllDone}>
        清除已完成任务
      </button>
    </div>
  )
}
Footer.propTypes = {
  todos: PropTypes.array,
  deleteAllDone: PropTypes.func
}
export default Footer

// import React from 'react'
// import PropTypes from 'prop-types'

// function index(props) {
//   return (
//     <div>

//     </div>
//   )
// }

// index.propTypes = {

// }

// export default index
