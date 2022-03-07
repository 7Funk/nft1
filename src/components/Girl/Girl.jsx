import { style } from '@mui/system'
import React from 'react'

import { Container } from '..'
import styles from './Girl.module.scss'

const Girl = () => {
  return (
    <Container className={styles.container}>
        <div className={styles.girlContainer}>
            <img className={styles.girlImg} src="/images/shutterstock.png" alt="girl" />
            <img className={styles.girlImgM} src="/images/shutterstockM.png" alt="" />
        </div>
        <div className={styles.rocket}>
            <div className={styles.rocketContainer}>
            <img className={styles.rocketImg} src="/images/rocket.svg" alt="rocket" />
            </div>
        </div>
    </Container>
  )
} 
export default Girl;