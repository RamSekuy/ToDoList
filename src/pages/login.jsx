import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((state)=>state.user);
    const admin={
        email:"admin@admin.admin",
        password:"admin"
    }
    return(<>
        <div className="flex flex-col gap-2 p-4 py-10 border-solid border-white border-2 w-full h-full items-center">
            <input className="px-2" type="text" placeholder="email" id="email"/>
            <input className="px-2" type="password" id="password" placeholder="password"/>
            <button className="p-2 border-solid border-2 border-white bg-blue-500 hover:bg-blue-300" onClick={()=>{
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                if(email==admin.email && password==admin.password){
                    alert(email+password);
                    dispatch(login({email,password}));
                    localStorage.setItem("email",email);
                    // console.log(user);
                    navigate("/")
                } else {
                    alert ("Salah woi")
                }
            }}>Login</button>
        </div>
    </>)
}
export default LoginPage