import { Component, Input } from '@angular/core';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule, ProjectDetailsComponent],
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: any;
  selectedProject: any = null;

  viewMore() {
    this.selectedProject = this.project;
  }
  closeDetails() {
    console.log('Close details triggered'); // Debug log
    this.selectedProject = null; // Reset selectedProject
  }
}
