import React from "react"
import styles from "./MenuPage.module.css"
import { NavLink } from "react-router-dom"

const MenuPage = (props) => {
   return (
      <div className={styles.mainWrapper}>
         <div><h2>mathcheckers</h2></div>
         <NavLink to="/game"><div className={styles.button}>Play</div></NavLink>
      </div>
   )
}

export default MenuPage