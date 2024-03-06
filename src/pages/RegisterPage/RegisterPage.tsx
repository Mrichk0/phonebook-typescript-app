import { FC, useEffect } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useAppSelector } from "../../hooks/storeHooks";
// import PhoneBook from "../../components/PhoneBook";

import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage: FC = () => {
  const { isLogin } = useAppSelector((state) => state.auth, shallowEqual);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/phone-book");
    }
  }, [isLogin, navigate]);

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
