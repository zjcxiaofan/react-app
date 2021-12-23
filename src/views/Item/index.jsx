import React from 'react'
import './index.css'

const Item = props => {
  const { name, done, id, changeDone, deleteTodo } = props
  const handleChange = (e) => {
    changeDone(id, e.target.checked)
  }
  const deleteItem = () => {
    deleteTodo(id)
  }
  return (
    <li className='item'>
      <input type="checkbox" checked={done} onChange={handleChange} />
      <span> {name}</span>
      <button className='btn' style={{ float: 'right' }} onClick={deleteItem}>删除</button>
    </li>
  )
}
export default Item
