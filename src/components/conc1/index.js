import React from 'react';
import { Head } from '../head';
class Items extends React.Component {

  render() {
    const { items, isLoad } = this.props.items;
    if (isLoad) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div>
          <Head />

          <center><h1>items List</h1></center>
          <div>

            <span onClick={() => this.props.handleUpdate(items.id + 1)}><b>Id:</b> {items.id}</span><br />

            <span><b>Title:</b> {items.title}</span>
          </div>
        </div>
      )
    }
  }

};
export default Items;