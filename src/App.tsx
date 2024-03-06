import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { lazy, useEffect } from "react";
import { fetchCurrentUser } from "./store/AuthReduсe/authOperation";
import Loader from "./components/shared/Loader";
import { selectIsLogin } from "./store/AuthReduсe/authSelectors";

const PhoneBook = lazy(() => import("./components/PhoneBook"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const PublicRoute = lazy(() => import("./routes/PublicRoute"));
const PrivateRoute = lazy(() => import("./routes/PrivateRoute"));

function App() {
  const loading = useAppSelector(selectIsLogin);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route element={<PublicRoute />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="phone-book" element={<PhoneBook />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
