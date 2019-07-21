import { Component, HostListener, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppService } from '../app.service';
enum KEY_CODE {
  ENTER = 13
}
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
  case: number;
  member = "";
  newScan = true;
  pickup: boolean;
  error = false;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!this.newScan) {
      this.member = "";
      this.newScan = true;
      this.error = false;
    }
    if (event.keyCode === KEY_CODE.ENTER) {
      this.newScan = false;
      if (!this.pickup) {
        this.app.lock(this.case, this.member)
        this.bsModalRef.hide()
      } else if (this.app.unlock(this.member)) {
        this.bsModalRef.hide()
      } else {
        this.error = true;
      }
    } else {
      this.member += event.key;
    }

  }

  constructor(public bsModalRef: BsModalRef, private app: AppService) { }

  ngOnInit() {
  }

}
