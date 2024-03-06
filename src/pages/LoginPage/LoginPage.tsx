import { useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import { useAppSelector } from "../../hooks/storeHooks";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { isLogin, error } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/phone-book");
    }
  }, [isLogin, navigate]);

  if (error === "Invalid payload received") {
    alert("sorry wrong email or password");
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
