import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   themes = {
    color:{
      primary:null,
      secondary:null,
      tertiary:null,
      dark:null,
      medium: null,
      light: null,
    }
  }
  constructor(
    private themeService:ThemeService
  ) {

  }

  setTheme(){
    this.themeService.setTheme(this.themes.color);
  }
}
