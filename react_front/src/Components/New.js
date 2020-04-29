import React, { Component } from 'react';
import axios from 'axios'

class New extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      neko_style: ''
    };
  }

  handleInputValue = (event) => {
    this.setState({
　　　　// setStateメソッドで更新するstateと新しいstateの値を指定する
      [event.target.name]: event.target.value
　　　　// フォームのname="neko_type"のnameを参照
       // this.setState({title: event.target.value})と同じ書き方となる
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method : "POST",
      url : "http://localhost:3001/posts",
      data : { name: this.state.name}
    })
    .then((response)=> {
    
      console.log(this.props)
      this.props.history.push('/');
    })
    .catch((error)=> {
      console.error(error);
    });
  }

  render() {
    const { name, neko_type } = this.state;
    return (
      <div>
        <p>新規投稿</p>
        <div>
          <label>名前 : </label>
          <input type="text" name="name" value={ name } onChange={ this.handleInputValue } />
          {/* <label>猫種 : </label>
          <input type='text' name="neko_type" value={ neko_type } onChange={ this.handleInputValue } /> */}
          <input type="button" onClick={this.handleSubmit} value="Submit" />
        </div>
      </div>
    );
  }
}


export default New;