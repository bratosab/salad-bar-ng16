import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'salad-bar';
  orderId$!: Observable<number>;

  constructor(private store: Store<{ app: AppState }>){}

  ngOnInit() {
    this.orderId$ = this.store.select(state => state.app.orderId)
  }

  logChangeDetection() {
    console.log("AppComponent : Changed detection executed")
    return true
  }
}
