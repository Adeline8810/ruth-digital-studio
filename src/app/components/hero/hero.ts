
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  constructor(public translation: TranslationService) {}

}
