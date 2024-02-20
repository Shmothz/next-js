import s from './Footer.module.scss'

export const Footer = () => {

 return <footer className={s.container}>
  <p>App was styling with scss modules</p>
  <span className={s.copyright}><a href={'https://github.com/Shmothz'} target={'_blank'}>&copy; Maximilian Datsky</a></span>
 </footer>
}