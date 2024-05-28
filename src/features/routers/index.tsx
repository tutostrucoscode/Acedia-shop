import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Path } from "../../constants";
import NotFound from "../../pages/notFound";
import PrivateRoute from "./private-route";
import Loading from "../loading";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { login, startLogout } from "../../redux/actions/auth";
import Home from "../../pages/home";
import { auth } from "../../configs/firebase";

const AppRouters = () => {
  const dispatch = useAppDispatch();
  const [session, setSession] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setIsLoading(false);
      if (user) {
        console.log("useEffect onAuthStateChanged user.email", user.email);
        const { photoURL, email, uid, displayName } = user;
        dispatch(login(uid, displayName, email, photoURL));
        setSession(true);
      } else {
        console.log("useEffect onAuthStateChanged NO USER");
        dispatch(startLogout());
        setSession(false);
      }
    });

    return () => {
      console.log("Se retorno el ciclo de vida en useEffect - AppRouters");
      unregisterAuthObserver();
    };
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={Path.Index} element={<Home />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route path={Path.Auth} element={<Auth />} /> */}
          <Route element={<PrivateRoute canActivate={session} />}>
            {/* <Route path={Path.Dashboard} element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouters;
