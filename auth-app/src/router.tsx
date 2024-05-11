import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/Sign-up";
import { PasswordRecovery } from "./pages/PasswordRecovery";

export function Router() {
    return(
        <Routes>
            <Route path="auth/login" element={<Login/>} />
            <Route path="auth/sign-up" element={<SignUp/>}/>
            <Route path="auth/recovery" element={<PasswordRecovery/>}></Route>
        </Routes>
    )
}