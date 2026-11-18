
import { Component } from '@angular/core';
import { TranslationService, Language } from '../../services/translation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(public translation: TranslationService) {}

  changeLanguage(lang: Language): void {
    this.translation.setLanguage(lang);
  }
}
