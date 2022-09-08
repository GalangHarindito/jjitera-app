import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";

export const publicRoutes = [
    {
      path: "/",
      component: Dashboard,
    },
    {
      path: "/profile",
      component: Profile,
    },
  ];