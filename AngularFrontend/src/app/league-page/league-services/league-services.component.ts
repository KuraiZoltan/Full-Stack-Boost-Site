import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-services',
  templateUrl: './league-services.component.html',
  styleUrls: ['./league-services.component.css']
})
export class LeagueServicesComponent {
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
    GameName: "League of Legends",
    Status: "Processing",
  };
  public ranks: Rank[] = [
    { name: "Iron", image: "https://boostroyal.no/assets/images/divisions/lol/iron.png" },
    { name: "Bronze", image: "https://boostroyal.no/assets/images/divisions/lol/bronze.png" },
    { name: "Silver", image: "https://boostroyal.no/assets/images/divisions/lol/silver.png" },
    { name: "Gold", image: "https://boostroyal.no/assets/images/divisions/lol/gold.png" },
    { name: "Platinum", image: "https://boostroyal.no/assets/images/divisions/lol/platinum.png" },
    { name: "Diamond", image: "https://boostroyal.no/assets/images/divisions/lol/diamond.png" },
    { name: "Master", image: "https://boostroyal.no/assets/images/divisions/lol/master.png" },
  ];
  public rankOptions: string[] = ['Solo/Duo', 'Flex']

  public rankLevels: string[] = ['I', 'II', 'III', 'IV']
  
}

interface Order {
  Username: string | null;
  UserId: number
  CurrentRank: string | null;
  CurrentRankLevel: string | null;
  CurrentRankPoints: string | null;
  OrderedRank: string | null;
  OrderedRankLevel: string | null;
  SelectedRegion: string | null;
  DiscordName: string | null;
  Email: string | null;
  GameName: string | null;
  Status: string | null
}

interface Rank {
  name: string;
  image: string
}


