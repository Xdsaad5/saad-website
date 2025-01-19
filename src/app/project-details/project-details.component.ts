import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports:[CommonModule],
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  @Input() project: any; 
  @Output() close = new EventEmitter<void>(); 

  closeModal(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.close.emit(); 
    }
  }
}
