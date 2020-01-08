import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 공부하기', done: true },
      { id: 1, text: '컴포넌트 스타일링 공부 해보기', done: false }
    ]
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  render() {

    const { input, todos } = this.state;
    const { 
      handleChange
    } = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} value={input} />
        <TodoList todos={todos} />
      </PageTemplate>
    )
  }
}

export default App;