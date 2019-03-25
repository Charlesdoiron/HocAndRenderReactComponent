import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WithIdeas from './WithIdeas'
import RenderIdeas from './RenderIdeas'
import List from './List'
import Table from './Table'

const ListWithIdeas = WithIdeas(List)
const TableWithIdeas = WithIdeas(Table)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>List with Hoc</h1>
          <ListWithIdeas/>
        <h1>Table with Hoc</h1>
          <TableWithIdeas/>
        <h1>List with Render Component</h1>
          <RenderIdeas render={({ideas})  => <List ideas={ideas}/>} />
        <h1>Table with Render Component</h1>
          <RenderIdeas render={({ideas})  => <Table ideas={ideas}/>} />
      </React.Fragment>
     
    )
  }
}

export default App;
