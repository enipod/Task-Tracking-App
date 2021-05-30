import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Task } from '../Task';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './notification.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:5000/tasks";
  constructor(
    private http: HttpClient,
    private notifyService : NotificationService
    ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    this.notifyService.showSuccess(`<p>Task was deleted successfully.</p>`, `Success`, {
      enableHtml: true
    });
    return this.http.delete<Task>(deleteUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addNewTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
