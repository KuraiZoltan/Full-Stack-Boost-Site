import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { AboutMePage } from "./components/AboutMePage";
import { LeagueOfLegends } from "./components/LeagueOfLegends";
import { Main } from "./components/MainPage";
import { Valorant } from "./components/ValorantPage"

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
    path: '/valorant',
    element: <Valorant />
    },
  {
    path: '/league-of-legends',
      element: <LeagueOfLegends />
  }

];

export default AppRoutes;
