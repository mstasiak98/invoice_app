import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent {

  @Input() showPopup: Observable<boolean>;
  @Output() confirmation = new EventEmitter<boolean>();

  confirm(decision: boolean): void {
    this.confirmation.emit(decision);
  }

}
