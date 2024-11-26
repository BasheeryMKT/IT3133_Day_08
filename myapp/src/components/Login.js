import { useNavigate } from "react-router-dom"
export default function Login(){
    const username = setUsername();
    const navigate = useNavigate();
    const authenticate=()=>{
        navigate('/dashboard')
    }
    return(
        <div>
            <h1>Login Here</h1>
            
            <button onClick={authenticate}>Login</button>

            <form>
                <input type='text'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="username"/> 
                
            </form>
        </div>
    )
}