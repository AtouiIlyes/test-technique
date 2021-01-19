import { Component, OnInit } from '@angular/core';
import {
  Doctor,
  DoctorsService,
  Speciality,
} from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  displayedColumns: string[] = ['name', 'specialty', 'availability', 'reserve'];
  doctors: Doctor[] = [];
  doctorsBySpecialities: Doctor[] = [];
  specialities: Speciality[] = [];
  selectedSpeciality = '';
  selectedDoctor: any = {};
  dataSource: any;
  showReserve = false;
  patient = '';
  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    this.doctors = this.doctorsService.getDoctors();
    this.specialities = this.doctorsService.getSpecialities();
    this.doctorsBySpecialities = [...this.doctors];
  }

  onChangeSpeciality(selectedSpeciality) {
    this.doctorsBySpecialities = [...this.doctors];
    if (Number(selectedSpeciality) !== 0) {
      this.doctorsBySpecialities = this.doctorsBySpecialities.filter(
        (doctor) => doctor.specialty === Number(selectedSpeciality)
      );
    }
  }

  getSpeciality(speciality) {
    return this.specialities.find((sp) => sp.id === speciality).name;
  }

  selectDoctor(doctor) {
    this.showReserve = true;
    this.selectedDoctor = doctor;
  }

  confirmReservation() {
    if (this.patient !== '') {
      this.selectedDoctor.availability = false;
      this.showReserve = false;
    } else {
      Swal.fire(
        'Champs vide!',
        'SVP veillez saisir le nom de patient',
        'error'
      );
    }
  }
}
