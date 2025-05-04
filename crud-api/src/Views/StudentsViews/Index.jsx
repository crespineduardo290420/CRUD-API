import React,{useEffect,useState} from 'react';
import DivAdd from '../../Components/DivAdd'; 
import DivTable from '../../Components/DivTable';
import {Link} from 'react-router-dom';
import { confirmation, sendRequest } from '../../functions';

const StudentsViews = () => {
  const [students, setStudents] = useState([]);
  const [classLoad, setClassLoad] = useState('d-none');
  const [classTable, setClassTable] = useState('d-none');
  useEffect(() => {
    getStudents();
  }, []);
  const getStudents = async () => {
    const res = await sendRequest('GET', {}, '/api/students', '');
    setStudents(res);
    setClassTable('');
    setClassLoad('d-none');
  }
  const deleteStudents = (id, name) => {
    confirmation(name, ('/api/students/' + id));
  }

  return (
    <div className='container-fluid'>
      <DivAdd>
        <Link to='create' className='btn btn-dark'>
          <i className='fa-solid fa-plus'></i> Add
        </Link>
      </DivAdd>
      <DivTable col='6' off='3' classLoad={classLoad} classTable={classTable}>
        <table className='table table-bordered'>
          <thead><tr><tr>#</tr><tr>ESTUDENTS</tr><th></th><th></th></tr></thead>
          <tbody className='table-group-divider'>
            {students.map ((row, i)=>(
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{row.id}</td>
                <td>
                  <Link to={'edit/' + row.id} className='btn btn-warning'>
                    <i className='fa-solid fa-edit'></i>
                  </Link>
                </td>
                <td>
                  <button className='btn btn-danger'
                    onClick={() => deleteStudents(row.id, row.name)}>
                    <i className='fa-solid fa-trash'></i>

                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

      </DivTable>
    </div>
  )
}

export default StudentsViews