import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email='xdsaad5@gmail.com';
  constructor(private titleservice:Title)
  {
    this.titleservice.setTitle('Saad Sultan - Contact');
  }  
}
