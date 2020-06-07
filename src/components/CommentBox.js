import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../store/actions'

class CommentBox extends Component {
  state = {
    comment: ''
  }
  commentChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  commentSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
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

const mapStateToProps = (state) => ({
  comments: state.comments,
})

const mapDispatchToProps = (dispatch) => ({
  saveComment: (comment) => dispatch(saveComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
