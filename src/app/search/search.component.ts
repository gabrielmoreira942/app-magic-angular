
import { Component, OnInit } from '@angular/core';

import axios from 'axios';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export default class FormComponent implements OnInit {
  formData: any = {};

  ngOnInit(): void {
    this.getCards()
  }
  submitForm() {
    console.log(this.formData);
  }
  getCards() {
    axios.get('https://api.magicthegathering.io/v1/cards')
      .then(response => {
        this.formData.blocks = response.data.cards
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
}
