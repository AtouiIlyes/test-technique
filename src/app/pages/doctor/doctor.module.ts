import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class DoctorModule {}
