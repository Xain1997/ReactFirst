import React from 'react';
//import { Head } from '../head';
import Contacts from '../conct';
import Items from '../conc1';

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      items: [],
      isLoaded: false,
      isLoad: false
    };

  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            contacts: result
          })

        }
      )
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(
        (data) => {

          this.setState({
            items: data,
            isLoaded: true
          })

        }
      )
  }
  handleUpdate = (id) => {
    this.setState({
      isLoad: true
    })
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then(res => res.json())
      .then(
        (data) => {

          this.setState({
            items: data,
            isLoad: false
          })

        }
      )
  }
  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div>

          <Items items={this.state} handleUpdate={this.handleUpdate.bind(this)} />

          <Contacts contacts={this.state.contacts} />
        </div>
      );
    }
  }
}
export default MyComponent;