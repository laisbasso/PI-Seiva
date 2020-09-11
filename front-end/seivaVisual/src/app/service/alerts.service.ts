import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertsComponent } from '../alerts/alerts.component';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private bsModalService: BsModalService
    ) { }

    private showAlert (message: string, type: string){
      const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent)
      bsModalRef.content.type = type
      bsModalRef.content.message = message
    }

    showAlertDanger(message: string){
      this.showAlert(message, "danger")
    }

    showAlertSuccess(message: string){
      this.showAlert(message, "success")
    }

    showAlertInfo(message: string){
      this.showAlert(message, "info")
    }

}


