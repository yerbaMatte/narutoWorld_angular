import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from './services/characters.service';
import { GalleryComponent } from '../gallery/gallery.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [CharactersService],
})
export class CoreModule {}
