import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [CommonModule, RouterLink],
  exports: [MenuBarComponent],
})
export class SharedModule {}
