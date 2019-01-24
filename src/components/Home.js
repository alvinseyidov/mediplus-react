import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/doctor/list/')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,10)
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home