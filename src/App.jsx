import React, { useEffect } from 'react';

import { Routes, Route, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Login";
import Home from "./container/Home";
import { fetchUser } from './utils/fetchUser';


import "./App.css";

function App() {
  //@sanity/client @sanity/image-url precisamos baixar essas dependencias para conectar o front ao backend
  //react-masonry-css vai permitir o efeito das imagens na aplicação
  //@react-oauth/google vai permitir a autenticação do google
  //sanity-studio-deploy= https://sharemecaiosilva.sanity.studio/

  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser()

    if(!user) navigate('/login')
  },[])
  
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />{" "}
        {/* /* significa tudo ou seja qualquer outra rota renderizará o component Home */}
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
