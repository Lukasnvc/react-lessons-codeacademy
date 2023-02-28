import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { routes } from "./const";

const Routes = () => {
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
