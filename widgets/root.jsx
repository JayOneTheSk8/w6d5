import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

const tabs = [
  {title: "Jay" ,content: "plays video games"},
  {title: "Keith" ,content: "last name rhymes with Beyonce"},
  {title: "David" ,content: "came to help"}
];

const Root = (props) => {
  return(
    <div>
      <Clock  />
      <Tabs tabs={tabs}/>
    </div>
  );
};

export default Root;
