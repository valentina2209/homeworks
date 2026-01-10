const backendUrl = 'https://backend-az86.onrender.com/api'

export default {
    productsList: `${backendUrl}/products`,
    getProductById: (id) => `${backendUrl}/products/${id}`,
}