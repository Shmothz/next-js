'use client'
import {createUseStyles} from 'react-jss'
import s from './Footer.module.scss'

const useStyles = createUseStyles({
 copyright: {
  '& > a': {
   color: 'white',
   fontSize: 18,
   textDecoration: 'none',
  },
 },
 description: {
  color: '#CCC',
  fontSize: 16,
  margin: 0,
 },
})
export const Footer = () => {

 const styles = useStyles()

 return <footer className={s.container}>
  <p className={styles.description}>Для стилизации используется модульный scss и react-jss</p>
  <span className={styles.copyright}><a href={'https://github.com/Shmothz/next-js'} target={'_blank'}>&copy; Господин</a></span>

 </footer>
}