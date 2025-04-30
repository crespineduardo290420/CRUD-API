import {Link, useNavigate} from 'react-router-dom'
import storage from '../Storage/storage'

const Nav = () => {
  const go = useNavigate();
  const logout = async() =>{
    storage.remove('authToken');
    storage.remove('authUser');
    await axios.get('/api/auth/logout',storage.get('authToken'));
    go('/login');
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-white bg-info'>
      <div className='container-fluid'>
          <a className='navbar-brand' href="">Kodigo CRUD</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav' arial-controls='navbarSupportedContent'>
           <span className='navbar-toggler-icon'></span>
          </button>
      </div>
      {/* condicion para verificar si el usuario esta logueado para mostrar estos menus*/}
      {storage.get('authUser') ? (
        <div className='collapse navbar-collapse' id='nav'>
          <ul className='navbar-nav mx-auto mb-2'>
              <li className='nav-item px-lg-5 h4'>
                {/* nombre del usuario cuando esta logueado */}
                {storage.get('authUser').name}
              </li>
              <li className='nav-item px-lg-5'>
                <Link className='nav-link' to='/'>Estudiantes</Link>
              </li>
              <li className='nav-item px-lg-5'>
                <Link className='nav-link' to='/graphic'>Grafica</Link>
              </li>
          </ul>
          {/* boton para cerrar la sesion */}
          <ul className='navbar-nav mx-auto mb-2'>
            <li className='nav-item px-lg-5'>
              <button className='btn btn-danger' onClick={logout}>Cerrar Sesion</button>
            </li>
          </ul>
        </div>
      ) : ''}
    </nav>
  )
}

export default Nav