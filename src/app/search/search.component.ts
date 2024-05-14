
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export default class FormComponent {
  formData: any = {};

  submitForm() {
    console.log('Dados do formulário:', this.formData);
  }
}
