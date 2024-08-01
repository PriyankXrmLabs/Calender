import React from 'react'
import styles from './Learning.module.scss'

function Heading(props) {
    const {Name} = props
  return (
    <p className={`${styles.Heading}`}>{Name}</p>
  )
}

export default Heading