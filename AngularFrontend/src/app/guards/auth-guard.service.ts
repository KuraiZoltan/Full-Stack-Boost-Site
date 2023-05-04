import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
/*import { JwtHelperService } from '@auth0/angular-jwt'*/

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private http: HttpClient) { }

  async canActivate() {
    const response = await this.http.get("https://localhost:7196/Role/getRole")
    if (response.body.Role === "Admin") {
      return true
    } else {
      return false
    }
    

    if (token) {
      return true
    } this.router.navigate(['/login'])
      return false
  }
}
