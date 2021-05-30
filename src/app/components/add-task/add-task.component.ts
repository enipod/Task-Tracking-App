import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showTaskForm: boolean = false;
  private subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showTaskForm = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add the task description!');
      return;
    } else if (!this.day) {
      alert('Please add the task day!');
    } else {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.onAddTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
