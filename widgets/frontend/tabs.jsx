import React from 'react';
import Headers from './headers';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  // <li>{this.props.tabs[this.state.index].content}</li>
  render(){
    const withIndex = this.props.tabs[this.state.index].index = this.state.index;
    return (
      <div>
        <Headers tabs={withIndex}/>
        <article>

        </article>
      </div>
    );
  }
}

export default Tabs;
