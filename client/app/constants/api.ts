
const BASE_URL = process.env.BASE_API_URL;

const Api = {
    login:`${BASE_URL}/auth/login`,
    signup:`${BASE_URL}/auth/signup`
}

export default Api;