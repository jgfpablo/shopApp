import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [CommonModule, RouterLink, FormsModule],
  exports: [MenuBarComponent],
})
export class SharedModule {}
