import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import SignupCard from "../components/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);
    // console.log(authScreenState);
  return (
    <>
       {/* <LoginCard /> */}
       {/* <SignupCard /> */}
       {authScreenState === "login" ? <LoginCard /> : <SignupCard />}
    </>
  )
// return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
}

export default AuthPage