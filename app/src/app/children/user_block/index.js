import React from 'react'
import styles from './styles'

const UserBlock = (props) => {
  const {data} = props
  return (
    <div style={styles.user}>
        <img
        src={data.owner.profile_pic_url}
        style={styles.userImage}
        alt={data.owner.username}
        />
        <div style={styles.userText}>
            <div style={styles.userName}>
                {data.owner.username}
            </div>
            <div>
                {data.location.name}
            </div>
        </div>
    </div>
  )
}

export default UserBlock