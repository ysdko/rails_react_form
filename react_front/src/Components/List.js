
import React, { Component } from 'react';
import axios from 'axios'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/posts')
    .then((results) => {
      this.setState({posts: results.data})
    //   console.log(results.data)
    })
    .catch((data) =>{
      console.log("error")
    })
  }

  render() {
    const {posts} = this.state
    console.log(this.state)
    return (
      <div>

          
        {posts.map((list) => {
            return <li key={list.id}> { list.name}</li>
            // postsに格納されているdataをmapメソッドを使い１つ１つ取り出し表示させる
          })}
      </div>
    );
  }
}
export default List;