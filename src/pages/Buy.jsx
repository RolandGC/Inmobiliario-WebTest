import React from 'react'
import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
//import { nuevoCliente } from "../data/clientes";
//import Formulario from "../components/Formulario";

// export async function action({ request }) {
//     const formData = await request.formData();
//     const datos = Object.fromEntries(formData);


//     const email = formData.get('email');

//     //validacion de todos los campos del form
//     const errores = [];
//     if (Object.values(datos).includes('')) {
//         errores.push('Todos los campos son obligatorios');
//     }

//     //validacion solo del email
//     let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

//     //de esta forma se valida con una exprecion regular
//     if (!regex.test(email)) {
//         errores.push('El email no es válido')
//     }

//     //retornar datos si hay errores
//     if (Object.keys(errores).length) {
//         return errores;
//     }
//     console.log(datos);

//     //usamos la funcion que registra los datos del nuevo cliente
//     await nuevoCliente(datos);

//     //hoock para redireccionar al usuario
//     return redirect('/')
// }

function Buy() {
    return (
        <>
            <div className="container mx-auto p-2">
                <h1 className='text-blue-900 font-black text-4xl'>Comprar</h1>
                <p className='mt-3'>Registrarse:</p>
                <div className='flex justify-end mt-3'>
                    {/* <button onClick={() => navigate(-1)} className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4'>Volver</button> */}
                </div>
                <div className="bg-white w-3/4 shadow mx-auto px-5 py-10 rounded-md mt-10">

                    {/* {errores?.length && errores.map((error, i) => (
                    <Error key={i} >{error}</Error>
                ))} */}

                    {/* <Form
                    noValidate
                    method="post"
                >

                    <Formulario />

                    <input className="mt-5 font-bold w-full py-2 bg-blue-800 uppercase text-white text-lg" type="submit" value={'registrar cliente'} />

                </Form> */}

                </div>
            </div>
        </>
    )
}

// const Buy = () => {

//     const navigate = useNavigate();
//     const errores = useActionData();//este hook permite acceder a lo que retorna un action.

//     return (
//         <>
//             <h1 className='text-blue-900 font-black text-4xl'>Nuevo Cliente</h1>
//             <p className='mt-3'>Registra tus clientes</p>
//             <div className='flex justify-end mt-3'>
//                 <button onClick={() => navigate(-1)} className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4'>Volver</button>
//             </div>
//             <div className="bg-white w-3/4 shadow mx-auto px-5 py-10 rounded-md mt-10">

//                 {errores?.length && errores.map((error, i) => (
//                     <Error key={i} >{error}</Error>
//                 ))}

//                 <Form
//                     noValidate
//                     method="post"
//                 >

//                     <Formulario />

//                     <input className="mt-5 font-bold w-full py-2 bg-blue-800 uppercase text-white text-lg" type="submit" value={'registrar cliente'} />

//                 </Form>

//             </div>
//         </>
//     )
// }


export default Buy