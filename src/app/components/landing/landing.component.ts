import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { trigger, transition, state, style, animate, query, stagger } from '@angular/animations';
import { BackendService } from '../../services/backend.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('800ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])]
})

export class LandingComponent implements OnInit {
  value = "Clear"
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private backend: BackendService,
    private commonService: CommonService,
    private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  /**
   * Builds and returns login form group
   */
  public buildForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(''),
      password: new FormControl('')
    });
    return this.loginForm;
  }


  public loginUser() {
    this.backend.login(this.loginForm.getRawValue()).subscribe(res => {
      this.commonService.openSnackBar(`${res && res['message']} ` || 'Login Successful', 'Close', null, {
        panelClass: ['snacky', 'success']
      });
      this.router.navigate(['dashboard']);
    }, (err) => {
      this.commonService.openSnackBar(`${err && err['error'] && err['error']['message']} ` || 'Login failed', 'Close', null, {
        panelClass: ['snacky', 'error']
      });
    });
  }
}
