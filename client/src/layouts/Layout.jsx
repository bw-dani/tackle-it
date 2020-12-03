import Header from "../components/Header";
import Sidebar from "../components/sidebar/Sidebar";


export default function Layout(props) {
  return (
    <div>
      <Header
       currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
     {props.children}
    </div>
  )
}
