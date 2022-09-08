import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./configs";
import { AppProvider } from './hooks/store'

const App: React.FC = () => {

  return (
    <AppProvider>
      <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, component: Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
    </AppProvider> 
    
  );
};

export default App;
