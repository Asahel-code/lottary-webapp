import AxiosUtility, {setAuthToken} from "./AxiosServices";

// login
const login = async (data) => {
    const res = await AxiosUtility.post("/users/login", data);

    return res.data;
}

// register
const register = async (data) => {
    const res = await AxiosUtility.post("/users/signup", data);

    return res.data;
}

const verifyAccount = async (data) => {
    setAuthToken(AxiosUtility);
    const res = await AxiosUtility.post("/code/verify", data);
  
    return res.data;
  }
  
  

const AuthServices = {
    login,
    register,
    verifyAccount, 
};

export default AuthServices;

