import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../firebase';

export default function Home(){
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    if(loading) return <p>User info loading</p>
    if(error) return <p>Somethings wrong</p>

    const handleLogout = () =>{
        signOut(auth).then(()=>{
            navigate("/login");
            console.log("Signed Out");
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
        <div>Welcome , {user.email}</div>
        <button className='bg-black text-white tounded p-1' onClick={handleLogout}>Logout</button>
        </>
    );
}