import { auth } from "@/firebase";
import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guest12345@gmail.com", "123456")
  }
  return (
    <>
      <button
        className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLoginModal())}
      >
        Login
      </button>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
      >
        <div
          className="w-[90%] h-[600px] bg-black text-white md:w-[560px] 
        md:h-[600px] border-gray-700 rounded-lg flex justify-center"
        >
          <div className="w-[90%] flex flex-col">
            <h1 className="text-center mt-4 font-bold text-4xl">
              Sign In To Your Account
            </h1>

            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Email"
              type={"email"}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Password"
              type={"password"}
              onChange={e => setPassword(e.target.value)}
            />
            <button 
            onClick={handleSignIn}
            className="bg-white text-black w-full font-bold text-lg p-2 mt-4 rounded-md">
              Sign in
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">Or</h1>

            <button 
            onClick={handleGuestSignIn}
            className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-4">
              Sign in as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
