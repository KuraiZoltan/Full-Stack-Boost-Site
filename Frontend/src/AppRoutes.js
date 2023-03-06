import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { AboutMePage } from "./components/AboutMePage";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about-me',
    element: <AboutMePage />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  }
];

export default AppRoutes;
