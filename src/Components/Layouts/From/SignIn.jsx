import { FcGoogle } from "react-icons/fc";


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../../../FireBase/Firebase.init";





const SignIn = () => {

const provider = new GoogleAuthProvider ()
 



     const handelGoogleSignIn = () => {
 signInWithPopup( auth, provider)
 .then ((result => {


    console.log(result
        
        .catch (error => {


                 console.log('ERROR', error)

        }))
 }))
 
     }






    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <button  onClick={handelGoogleSignIn} className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
                <FcGoogle className="text-xl" />
                <span className="text-gray-700 font-medium">Sign in with Google</span>
            </button>
        </div>
    );
};

export default SignIn;
