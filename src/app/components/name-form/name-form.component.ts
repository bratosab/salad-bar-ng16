import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SetName } from '../../store/app.actions';
import { DoNavigate } from '../../store/router.actions';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
})
export class NameFormComponent {
  nameForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  buildSalad() {
    if (this.nameForm.valid) {
      const nameForm = this.nameForm.controls.name.value ?? '';

      this.store.dispatch(SetName({ name: nameForm }));
      this.store.dispatch(DoNavigate({ path: 'salad' }));
    }
  }
}
