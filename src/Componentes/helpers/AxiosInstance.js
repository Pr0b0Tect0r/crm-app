import axios from 'axios'
import api from '../constants/api';

// Toda API request requiere token
const AuthTokenRequest = axios.create({
	baseURL: api.BASE_URL
})
// interceptor de petición (antes de solicitud)
AuthTokenRequest.interceptors.request.use(
	config => { // Hacer algo antes de enviar la solicitud
		const token = localStorage.getItem("token") ?
			JSON.parse(localStorage.getItem("token")) :
			''
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	error => Promise.reject(error) // Hacer algo con error de solicitud
)

// interceptor de respuesta (despues de solicitud)
AuthTokenRequest.interceptors.response.use(
	response => response.status === 401 ? alert('holaaa') : response,          // Cualquier código de estado que se encuentre dentro del rango de 2xx hace que esta función se active
	error => Promise.reject(error)// Cualquier código de estado que esté fuera del rango de 2xx hace que esta función se active
)

// 
const NoAuthTokenRequest = axios.create({
	baseURL: api.BASE_URL,
})

export {
	AuthTokenRequest,
	NoAuthTokenRequest
}