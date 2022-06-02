/**
 * Estructura de datos
 * 
 * {
 *  nombre,
 *  telefono,
 *  edad
 *  etc
 * }
 * 
 */

const CANTIDAD_CONTACTOS = 10


const nombres = ["Daniel", "Fernando", "Ely", "Hilda", "Kenaan"]
const apellidos = ["Villarroel", "Soto", "Cruz", "Carrasquero", "Unias"]

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generarNombre = () => `${nombres[random(0, nombres.length - 1)]}`

const generarApellido = () => `${apellidos[random(0, apellidos.length - 1)]}`

// Telefono seria algo como 11-333-1123
const generarTelefono = () => `${random(10, 99)}-${random(100, 999)}-${random(1000, 9999)}`

//console.log(generarNombre())
//console.log(generarApellido())

const crearContacto = () => {
    return {
        nombreCompleto: `${generarApellido()}, ${generarNombre()}`,
        telefono: generarTelefono(),
        edad: random(18, 50)
    }
}

const prueba = crearContacto()
console.log(prueba, prueba.nombreCompleto[0])




let contactos = Array.from({
    length: CANTIDAD_CONTACTOS
}, crearContacto).map((item, index) => {
    return { ...item, id: index}
})

const getContacts = () => {
    //TODO: Apply the API FETCH

    return new Promise((resolve, reject) => {
        return resolve(contactos)
    })
}

const getContactDetails = (id) => {
    return new Promise((resolve, reject) => {
        const contact = contactos.find(item => item.id === id)
        return resolve(contact)
    })
}

const deleteContact = (id) => {
    return new Promise((resolve, reject) => {

        contactos = contactos.filter(item => item.id !== id)
        
        return resolve(true)
    })
}

export default {
    getContacts,
    getContactDetails,
    deleteContact
};