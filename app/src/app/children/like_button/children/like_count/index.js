import React from 'react'
import styles from '../../styles'

const LikeCount = (props) => {
    const {data} = props
    return (
        <div style={styles.likeCount}>  
            {`${data.edge_media_preview_like.count.toLocaleString()} likes`}
        </div>
    )
}

export default LikeCount