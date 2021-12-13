import { Component } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    public authService : AuthService
  ) {
  } 

}
