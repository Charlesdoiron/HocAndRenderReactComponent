import React from 'react';

const Table = props => (
  <table>
    <tr>
    {props.ideas.map(idea => {
      return <td key={idea.name}>{idea.name}</td>
    })}
    </tr>
  </table>
)
export default Table