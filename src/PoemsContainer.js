import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {


  render(){
    const poems = this.props.poemsData.map(poem =>  {
      return <Poem poemData={poem}/>
    })

    return (
      <div className="poems-container">
        {poems}
      </div>
    ); 
  }
}

export default PoemsContainer;