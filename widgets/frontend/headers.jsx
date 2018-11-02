import React from 'react';

class Headers extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const headerLis = [];
    const tabs = this.props.tabs;
    for(let i = 0; i < tabs.length; i++){
      if (tabs[i].index) {
        let nextHeader = <li selected='true' key={i}><h1>{tabs[i].title}</h1></li>;
        headerLis.push(nextHeader);
      } else {
        let nextHeader = <li key={i}><h1>{tabs[i].title}</h1></li>;
        headerLis.push(nextHeader);
      }
    }
    return(
      <ul>
        {headerLis}
      </ul>
    );
  }
}

export default Headers;
