import { Component, OnInit } from '@angular/core';
import { PartiesService, Party } from 'src/app/services/parties.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css'],
})
export class PartiesComponent implements OnInit {
  parties: Party[] = [];
  constructor(private partiesService: PartiesService) {}

  ngOnInit(): void {
    this.partiesService.getParties().subscribe((data) => {
      if (data !== undefined) {
        this.parties = [];
        let parties = [...data];
        for (let party of parties) {
          party.nb_place_available = party.nb_place;
          this.parties.push(party);
        }
        console.log(this.parties);
      }
    });
  }

  reservePlaces(e) {
    if (e.partyId !== undefined) {
      let partyIndex = this.parties.findIndex(
        (party) => party.id === e.partyId
      );
      if (partyIndex > -1) {
        let party = this.parties[partyIndex];
        if (e.reservedPlaces < party.nb_place_available) {
          this.parties[partyIndex].nb_place_available =
            this.parties[partyIndex].nb_place_available - e.reservedPlaces;
        } else {
          Swal.fire(
            'Résérvation échue!',
            'Nombre des places réservés est supérieur au nombre des places disponibles',
            'error'
          );
        }
      }
    }
  }
}
