import { connect } from "react-redux";
import { authSelectors, authOperations } from '../redux/auth';

const UserMenu = ({name,  onLogout}) => {
  
  return (
    <nav className='userMenu'>
      <h3 className="h3" >Welcome {name}</h3>
      <button
        type='button'
        // className="logoutbutton"
        className="button"
        onClick={onLogout}
      >
        Logout
      </button>
    </nav>
  )
}

const mapStateToProps = state => ({
  name: authSelectors.userName(state),
})
// const mapDispatchToProps = dispatch => {
//   return {
//     onLogout: () => dispatch(authOperations.logOut())
//   }
// }

const mapDispatchToProps = {
  onLogout:authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);