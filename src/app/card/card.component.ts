import { Component, Input } from '@angular/core';
import { NarutoCharacter } from '../naruto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() charDetails!: NarutoCharacter;
}
