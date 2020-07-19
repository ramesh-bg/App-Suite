import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  value ="Clear"
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {

  }

  /**
   * Builds and returns login form group
   */
  public buildForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('Hiii'),
      password: new FormControl('')
    });
    return this.loginForm;
  }

}
