import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from '../shared/client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // formClient: FormGroup;

  name = new FormControl('');
  observation = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  // createForm(client: Client) {
  //   this.formClient = new FormGroup ({

  //   })
  // }

  onSubmit() {

  }

}
