import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-valorant-services',
  templateUrl: './valorant-services.component.html',
  styleUrls: ['./valorant-services.component.css']
})
export class ValorantServicesComponent {
  public order: Order = {
    UserId: 0,
    Username: "",
    CurrentRank: "",
    CurrentRankLevel: "",
    CurrentRankPoints: "",
    OrderedRank: "",
    OrderedRankLevel: "",
    SelectedRegion: "",
    DiscordName: "",
    Email: "",
    GameName: "Valorant",
    Status: "Processing"
  };
  public ranks: Rank[] = [
    { name: "Iron", image: "https://boostroyal.com/assets/images/divisions/valorant/ironiii.png" },
    { name: "Bronze", image: "https://boostroyal.com/assets/images/divisions/valorant/bronzeiii.png" },
    { name: "Silver", image: "https://boostroyal.com/assets/images/divisions/valorant/silveriii.png" },
    { name: "Gold", image: "https://boostroyal.com/assets/images/divisions/valorant/goldiii.png" },
    { name: "Platinum", image: "https://boostroyal.com/assets/images/divisions/valorant/platinumiii.png" },
    { name: "Diamond", image: "https://boostroyal.com/assets/images/divisions/valorant/diamondiii.png" },
    { name: "Ascendant", image: "https://boostroyal.com/assets/images/divisions/valorant/ascendantiii.png" },
  ];
  public rankOptions: string[] = ['Solo/Duo', 'Flex']

  public rankLevels: string[] = ['I', 'II', 'III', 'IV']
  public isUserLoggedIn: boolean | undefined;
  public isOrderCorrect: boolean | undefined;
  public wrongData: boolean | undefined;
  public loggedInUser: User = {
    Email: "",
    DiscordName: "",
    UserId: 0,
    Username: null
  }
}

interface Rank {
  name: string;
  image: string
}

interface Order {
  UserId: number;
  Username: string | null;
  CurrentRank: string | null;
  CurrentRankLevel: string | null;
  CurrentRankPoints: string | null;
  OrderedRank: string | null;
  OrderedRankLevel: string | null;
  SelectedRegion: string | null;
  DiscordName: string | null;
  Email: string | null;
  GameName: string | null;
  Status: string | null;
}

interface User {
  DiscordName: string | null;
  Email: string | null;
  UserId: number;
  Username: string | null;
}
