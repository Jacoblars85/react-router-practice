import { Link } from 'react-router-dom';

function Nav() {

  return (
    <li>
      <Link to="/home">
        <ul>Home</ul>
      </Link>
      <Link to="allStudents/">
        <ul>All Students</ul>
      </Link>
      <Link to="/about">
        <ul>About</ul>
      </Link>
    </li>
  )
}


export default Nav;