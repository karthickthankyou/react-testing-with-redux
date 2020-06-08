import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from '../store/actions'

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
      <div>
        <form onSubmit={this.commentSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.commentChange} />
          <button>Submit</button>
        </form>
        <button id="btn-fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
})

const mapDispatchToProps = (dispatch) => ({
  saveComment: (comment) => dispatch(saveComment(comment)),
  fetchComments: () => dispatch(fetchComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
