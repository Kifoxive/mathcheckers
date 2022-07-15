import { connect } from 'react-redux';
import MenuPage from './MenuPage';


let mapStateToProps = (state) => {
   return {
   }
}
let mapDispatchToProps = (dispatch) => {
   return {}
}

const MenuPageContainer = connect(mapStateToProps, mapDispatchToProps)(MenuPage)

export default MenuPageContainer