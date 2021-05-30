import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showTaskForm: boolean = false;
  private subject = new Subject<any>()

  constructor() {}

  toggleForm(): void {
    this.showTaskForm = !this.showTaskForm;
    this.subject.next(this.showTaskForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
