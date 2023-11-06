import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent {
  nameForm = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {}

  buildSalad() {
    console.log(this.nameForm.controls['name'].value)
  }
}
