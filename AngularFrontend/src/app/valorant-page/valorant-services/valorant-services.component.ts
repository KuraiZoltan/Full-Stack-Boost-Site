import { Component } from '@angular/core';
import { Order } from '../../interfaces/Order';
import { User } from '../../interfaces/User';
import { Rank } from '../../interfaces/Rank';

@Component({
  selector: 'app-valorant-services',
  templateUrl: './valorant-services.component.html',
  styleUrls: ['./valorant-services.component.css']
})
export class ValorantServicesComponent {
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
      gameName: "Valorant",
      status: "Processing",
      id: 0
  };
  public ranks: Rank[] = [
    { name: "Iron", image: "https://qwik.boostroyal.com/cdn-cgi/image/width=75,quality=95,format=auto/images/divisions/valorant/ironiii.png" },
    { name: "Bronze", image: "https://qwik.boostroyal.com/cdn-cgi/image/width=75,quality=95,format=auto/images/divisions/valorant/bronzeiii.png" },
    { name: "Silver", image: "https://qwik.boostroyal.com/cdn-cgi/image/width=75,quality=95,format=auto/images/divisions/valorant/silveriii.png" },
    { name: "Gold", image: "https://qwik.boostroyal.com/cdn-cgi/image/width=75,quality=95,format=auto/images/divisions/valorant/goldiii.png" },
    { name: "Platinum", image: "https://qwik.boostroyal.com/cdn-cgi/image/width=75,quality=95,format=auto/images/divisions/valorant/platinumiii.png" },
    { name: "Diamond", image: "https://qwik.boostroyal.com/cdn-cgi/image/width=75,quality=95,format=auto/images/divisions/valorant/diamondiii.png" },
    { name: "Ascendant", image: "https://qwik.boostroyal.com/cdn-cgi/image/width=75,quality=95,format=auto/images/divisions/valorant/ascendantiii.png" },
  ];
  public rankOptions: string[] = ['Solo/Duo', 'Flex']

  public rankLevels: string[] = ['I', 'II', 'III', 'IV']
  public isUserLoggedIn: boolean | undefined;
  public isOrderCorrect: boolean | undefined;
  public wrongData: boolean | undefined;
  public loggedInUser: User = {
      email: "",
      discordName: "",
      userId: 0,
      username: null,
      role: null
  }
}
