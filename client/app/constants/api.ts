
const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
console.log("BASE_URL", BASE_URL);

const Api = {
    login:`${BASE_URL}/auth/login`,
    signup:`${BASE_URL}/auth/signup`
}

export default Api;