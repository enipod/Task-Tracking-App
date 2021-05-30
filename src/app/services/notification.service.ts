import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toast: ToastrService) {}

  showSuccess(message: string, title: string, config: object) {
    return this.toast.success(message, title, config);
  }

  showError(message: string, title: string, config: object) {
    this.toast.error(message, title, config);
  }

  showInfo(message: string, title: string, config: object) {
    this.toast.info(message, title, config);
  }

  showWarning(message: string, title: string, config: object) {
    this.toast.warning(message, title, config);
  }
}
