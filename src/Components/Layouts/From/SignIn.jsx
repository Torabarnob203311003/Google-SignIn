import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
                <FcGoogle className="text-xl" />
                <span className="text-gray-700 font-medium">Sign in with Google</span>
            </button>
        </div>
    );
};

export default SignIn;
