import React from 'react'
import Item from '../Item'
import './index.css'

const List = props => {
  const { todos, changeDone, deleteTodo } = props
  return (
    <ul className='list'>
      {
        todos.map(v => {
          return (<Item key={v.id} {...v} changeDone={changeDone} deleteTodo={deleteTodo} />)
        })
      }
    </ul>
  )
}
export default List