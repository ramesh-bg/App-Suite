import { Component } from '@angular/core';
import { InterceptorService } from './services/interceptor.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: Subject<boolean> = this.interceptor.spinner;
  constructor(public interceptor: InterceptorService) {
  }
}
