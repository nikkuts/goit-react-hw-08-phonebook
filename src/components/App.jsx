import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { Layout } from "./Layout";
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export default function App () {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/contacts"
          element={<ContactsPage />}
        />
      </Route>
    </Routes>
    );
};


      
  //   return (
  //     <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />} />
  //       <Route
  //         path="/register"
  //         element={
  //           <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
  //         }
  //       />
  //       <Route
  //         path="/contacts"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
  //         }
  //       />
  //     </Route>
  //   </Routes>
  //     );

    // return (
    //   <>
    //     {/* <AppBar /> */}
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/register" element={<Register/>} />
    //     <Route path="/login" element={<Login/>} />
    //     <Route path="/contacts" element={<Contacts/>} />
    //   </Routes>
   
    //   </>
    //   );