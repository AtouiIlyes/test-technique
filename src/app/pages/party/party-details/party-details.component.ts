import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-party-detail',
  templateUrl: './party-details.component.html',
  styleUrls: ['./party-details.component.css'],
})
export class DetailsPartiesComponent implements OnInit {
  @Input() data: any;
  @Output() reserve = new EventEmitter<any>();

  reservedNbPlace = null;
  showForm = false;
  constructor() {}

  ngOnInit(): void {}

  getPartyBackground(nbPlace) {
    if (nbPlace >= 0 && nbPlace < 40) {
      return 'orange';
    } else if (nbPlace >= 40 && nbPlace <= 100) {
      return 'green';
    } else if (nbPlace > 100) {
      return 'blue';
    }
  }

  Reserve(id) {
    this.reserve.emit({ partyId: id, reservedPlaces: this.reservedNbPlace });
    this.showForm = false;
    this.reservedNbPlace = null;
  }
}
