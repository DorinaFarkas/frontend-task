import React from 'react'
import styles from './styles'
import {getCaptionFromEdges} from './helpers'
import LikedIcon from '../like_button/children/liked_icon'
import UnlikedIcon from '../like_button/children/unliked_icon'

const CommentsBlock = (props) => {
  const {data} = props
  return (
    <div style={styles.block}>
    {getCaptionFromEdges(data.comments).map((comment) =>(
        <div style={styles.commentWrapper} key={comment.id}>
          <div style={styles.comment}>

            {/* USER NAME */}
            <span style={styles.name}>
              {getCaptionFromEdges(data.edge_media_to_comment.edges).find(user => user.node.text === comment.text).node.owner.username}
            </span>

            {/* COMMENT TEXT */}
            <span>
              {comment.text}
            </span>
          </div>

          {/* COMMENT LIKE BUTTON */}
          <div style={styles.liked}>
            {comment.likedByViewer ? 
              <LikedIcon height={12} /> :
              <UnlikedIcon height={12} />
            }
          </div>       
        </div>
      ))}
    </div>
  
  )
}

export default CommentsBlock