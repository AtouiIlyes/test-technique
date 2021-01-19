import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceModule } from 'src/app/services/services.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'party',
        loadChildren: () =>
          import('../party/party.module').then((m) => m.PartiesModule),
        data: {},
      },
      {
        path: 'doctor',
        loadChildren: () =>
          import('../doctor/doctor.module').then((m) => m.DoctorModule),
        data: {},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ServiceModule],
  exports: [RouterModule],
})
export class MainRoutingModule {}
