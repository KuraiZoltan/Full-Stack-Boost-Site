import { Component } from '@angular/core';
import { Order } from '../../interfaces/Order';
import { Rank } from '../../interfaces/Rank';

@Component({
  selector: 'app-league-services',
  templateUrl: './league-services.component.html',
  styleUrls: ['./league-services.component.css']
})
export class LeagueServicesComponent {
  public order: Order = {
      userId: 0,
      username: "",
      currentRank: "",
      currentRankLevel: "",
      currentRankPoints: "",
      orderedRank: "",
      orderedRankLevel: "",
      selectedRegion: "",
      discordName: "",
      email: "",
      gameName: "League of Legends",
      status: "Processing",
      id: 0
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
