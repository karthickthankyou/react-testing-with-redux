
import React from 'react'
import { connect } from 'react-redux'

const CommentList = (props) => {
  return (
    <div>
      Comments:
      {
        props.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)
