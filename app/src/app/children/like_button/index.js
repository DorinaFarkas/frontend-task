import React from 'react'
import Days from './children/days'
import LikedIcon from './children/liked_icon'
import LikeCount from './children/like_count'
import UnlikedIcon from './children/unliked_icon'
import styles from './styles'

const LikeButton = (props) => {
  const {data} = props
  
  return (
    <div style={styles.likeWrapper}>
      <div>
        <LikeCount data={data} />
        <Days data={data} />
      </div>
      <div style={styles.like}>
        { data.viewer_has_liked ? 
          <LikedIcon /> :
          <UnlikedIcon />
        }
      </div>
    </div>
  
  )
}

export default LikeButton
