import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartiesComponent } from './party.component';
import { PartiesRoutingModule } from './party-routing.module';
import { DetailsPartiesComponent } from './party-details/party-details.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PartiesComponent, DetailsPartiesComponent],
  imports: [CommonModule, PartiesRoutingModule, FormsModule, MatButtonModule],
})
export class PartiesModule {}
