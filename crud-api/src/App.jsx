import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Students from './Views/Students/Index'
import CreateStudents from './Views/Students/Create'
import EditStudents from './Views/Students/Edit'
import StudentsViews from './Views/StudentsViews/Index'
import Graphic from './Views/StudentsViews/Graphic'
import Login from './Views/Login'
import Register from './Views/Register'
import ProtectedRoutes from './Components/ProtectedRoutes'

function App() {
 

  return (
   <BrowserRouter >
   <Nav />
   <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />

  {/* proteccion de las rutas que necesitan de tokkens */}
    <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Students />} />
        <Route path='/create' element={<CreateStudents />} />
        <Route path='/edit/:id' element={<EditStudents />} />
        <Route path='/studentsviews' element={<StudentsViews />} />
        <Route path='/graphic' element={<Graphic />} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
