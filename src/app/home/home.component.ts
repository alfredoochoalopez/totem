import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CasesComponent } from '../cases/cases.component';
import { ScanComponent } from '../scan/scan.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openCases() {
    this.modalService.show(CasesComponent);
  }
  pickUp() {
    this.modalService.show(ScanComponent, { initialState: { pickup: true } })
  }

}
