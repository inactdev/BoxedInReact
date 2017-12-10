import React from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'BOXED IN'}</p>
      <p className={slogan}>{'Make a pick. Good Luck !'}</p>
    </div>
  )
}
