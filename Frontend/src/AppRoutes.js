import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { AboutMePage } from "./components/AboutMePage";
import { LeagueOfLegends } from "./components/LeagueOfLegends";
import { Main } from "./components/MainPage";

const AppRoutes = [
  {
    index: true,
    element: <Main />
  },
  {
    path: '/about-me',
    element: <AboutMePage />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/league-of-legends',
      element: <LeagueOfLegends />
  }

];

export default AppRoutes;
