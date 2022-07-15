import React from "react"
import styles from "./OptionsInput.module.css"

const OptionsInput = (props) => {

   const optionsOnChange = (e) => {
      let option = Number(e.target.value);
      props.optionsOnChange(option)
   }

   return (<div className={styles.container}><select name="cathegory" onChange={optionsOnChange} defaultValue="none">
      <option value="none">all cathegories</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
   </select></div>)
}

export default OptionsInput