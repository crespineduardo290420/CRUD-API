//Archivo que servira para crear y reutilizar las alertas de solicitud de la api

import Swal from 'sweetalert2';
import storage from './Storage/storage'

//Hacemos la funcion de la alerta
export const show_alerta = (msj, icon) =>{
    //crear nueva alerta
    Swal.fire({
        title:msj,
        icon:icon,
        buttonsStyling:true
    });
}

//funcion asincrona para envio de solicitud de la api
export const sendRequest = async(method,params,url,redir='',token=true) => {
    if(token){
        const authToken = storage.get('authToken');
        //autorizacion mediante axios
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
    }
    //creamos variable para respuesta de api
    let res;
    await axios({ method:method, url:url, data:params}).then(
        response => {
            res = response.data,
            (method != 'GET') ? show_alerta(response.data.message, 'success'): '',
            setTimeout( () =>
            (redir !== '') ? window.location.href = redir : '', 2000)
            //por si hay error en la respuesta de la api haremos un catch
        }).catch( (errors) => {
            let desc='';
            res = errors.response.data,errors.response.data.errors.map( (e) => {desc = desc + ' '+e})
            show_alerta(desc, 'error')
        })
        return res;
}

//funcion asincrona para la respuesta de api
export const confirmation = async(name,url,redir) => {
    const alert = Swal.mixin({buttonsStyling:true});
    alert.fire({
        title:'¿Quieres eliminar el registro de '+name+' ?',
        icon:'question',showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i> No, cancelar'
    }).then( (result) => {
        //si todo esta bien y si el usuario confirma la eliminacion de registro
        if(result.isConfirmed){
            sendRequest('DELETE',{},url,redir);
        }
    });
}

export default show_alerta;