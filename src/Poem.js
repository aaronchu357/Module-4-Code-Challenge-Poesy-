import React from 'react';

class Poem extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
  
  render(){
    const poemData = this.props.poemData
    const isClicked = this.state.clicked
    return (
      <div style={isClicked?{color: "red"}:{color: "black"}} name={poemData.id} onClick={this.handleClick}>
        <h3>{poemData.title}</h3>
        <p>{poemData.content}</p>
        <strong>- By {poemData.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
