import React from 'react';
import {Head} from'../head';

  class MyComponent extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          
          <div><Head/>
            {items.title}
          </div>
          /*<ul>
            {items.map(item => (
              <li key={item.userId}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>*/
        );
      }
    }
  }
export default MyComponent;