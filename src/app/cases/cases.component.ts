import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppService, Case } from '../app.service';
import { ScanComponent } from '../scan/scan.component';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  public cases: Case[];
  constructor(public bsModalRef: BsModalRef, private modalService: BsModalService, private app: AppService) {
    this.cases = this.app.cases;
  }
  ngOnInit() { }

  open(number: number) {
    this.bsModalRef.hide();
    this.modalService.show(ScanComponent, { initialState: { case: number, pickup: false }, class: 'modal-dialog-centered' });
  }
}
