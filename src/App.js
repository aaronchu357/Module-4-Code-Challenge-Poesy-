import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  
  state = {
    allPoems: [],
    input: '',
    newPoems:[]
  }

  componentDidMount() {
    fetch('http://localhost:3000/poems')
    .then(resp => resp.json())
    .then(poems => {
      this.setState({allPoems:poems})
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    debugger
    this.setState({input:e.target.value})
  }

  usersName = () => {

  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm handleSubmit={(e) => this.handleSubmit()} handleChange={(e) => this.handleChange(this.state.input)}/>
          <UserHeader />
          <NewPoemForm />
        </div>
        <PoemsContainer poemsData={this.state.allPoems}/>
      </div>
    ); 
  }
}

export default App;
