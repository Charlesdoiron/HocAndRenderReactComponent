import React from 'react'

const List = (props) => (
  <ul>
    {props.ideas.map(idea => {
      return <li key={idea.name}>{idea.name}</li>
    })}
  </ul>
)

export default List;