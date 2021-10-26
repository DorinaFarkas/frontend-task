import React from 'react'
import styles from '../../styles'

const Days = (props) => {
    const {data} = props
    const diffDays = (date) => Math.ceil(Math.abs(date - new Date()) / (1000 * 60 * 60 * 24))
    
    return (
        <div style={styles.days}>
          {`${diffDays(new Date(data.taken_at_timestamp*1000))} DAYS AGO` }
        </div>
    )
}

export default Days