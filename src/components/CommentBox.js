import React, { Component } from 'react'

class CommentBox extends Component {
  state = {
    comment: ''
  }

  commentChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  commentSubmit = (e) => {
    e.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.commentSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.commentChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export default CommentBox
