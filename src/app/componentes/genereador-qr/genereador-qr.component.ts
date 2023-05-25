import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genereador-qr',
  templateUrl: './genereador-qr.component.html',
  styleUrls: ['./genereador-qr.component.css']
})
export class GenereadorQrComponent implements OnInit {

  image!: HTMLImageElement | null;
  input!: HTMLInputElement | null;
  button!: HTMLButtonElement | null;
  api = 'https://api.qrserver.com/v1/';
  api2 = 'create-qr-code/?size=150x150&data=';

  constructor() { }

  ngOnInit(): void {
    this.image = document.querySelector('img');
    this.input = document.querySelector('input');
    this.button = document.querySelector('button');

    this.button!.addEventListener('click', () => {
      this.image!.src = `${this.api}${this.api2}${this.input?.value}`;
    });
  }
}
