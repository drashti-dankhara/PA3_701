import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent {
  user = {
    name: '',
    email: '',
    address: ''
  };
  submitted = false;

  onSubmit() {
    // Handle form submission logic here
    console.log('User Submitted:', this.user);
    this.submitted = true;
    // You can send the user data to the backend API or perform other actions as needed
  }
}
