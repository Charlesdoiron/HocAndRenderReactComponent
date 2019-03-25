import React, {Component} from 'react';
import List from './List'
import axios from 'axios';


const WithIdeas = ChildComponent => 

    class FetchIdeas extends Component {
      state = {
        ideas : []
      }
      componentDidMount(){
        axios.get('https://en-marche.fr/api/ideas-workshop/ideas?status=PENDING').then(
          data => this.setState({ideas : data.data.items})
           )
      }
      render(){
          return <ChildComponent ideas={this.state.ideas}/>
        }
    }


export default WithIdeas;