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
      id: 0,
      rankedType: ""
  };
  public ranks: Rank[] = [
    { name: "Iron", image: "http://odinboost.com/_ipx/f_webp/img/leagues/iron1.png" },
    { name: "Bronze", image: "http://odinboost.com/_ipx/f_webp/img/leagues/bronze1.png" },
    { name: "Silver", image: "http://odinboost.com/_ipx/f_webp/img/leagues/silver1.png" },
    { name: "Gold", image: "http://odinboost.com/_ipx/f_webp/img/leagues/gold1.png" },
    { name: "Platinum", image: "http://odinboost.com/_ipx/f_webp/img/leagues/platinum1.png" },
    { name: "Diamond", image: "http://odinboost.com/_ipx/f_webp/img/leagues/diamond1.png" },
    { name: "Master", image: "http://odinboost.com/_ipx/f_webp/img/leagues/master1.png" },
  ];
  public rankOptions: string[] = ['Solo/Duo', 'Flex']

  public rankLevels: string[] = ['I', 'II', 'III', 'IV']
}
