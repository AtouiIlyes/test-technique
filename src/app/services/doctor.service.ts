import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Doctor {
  id: number;
  name: string;
  specialty: number;
  availability: boolean;
}

export class Speciality {
  id: number;
  name: string;
}

let doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr Sophie ',
    specialty: 1,
    availability: false,
  },

  {
    id: 2,
    name: 'Dr Alexandra Dupont',
    specialty: 1,
    availability: true,
  },

  {
    id: 3,
    name: 'Dr Alexandre Paul ',
    specialty: 2,
    availability: true,
  },

  {
    id: 4,
    name: 'Nadir Madani ',
    specialty: 3,
    availability: false,
  },
];
let specialities: Speciality[] = [
  {
    id: 0,
    name: 'Toute spécialité',
  },
  {
    id: 1,
    name: 'Ophtalmologiste',
  },
  {
    id: 2,
    name: 'Radiologiste',
  },
  {
    id: 3,
    name: 'Pédiatre',
  },
];

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  constructor() {}

  getDoctors(): Doctor[] {
    return doctors;
  }

  getSpecialities(): Speciality[] {
    return specialities;
  }
}
