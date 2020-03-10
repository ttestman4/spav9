import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

interface tabData {
  name: string;
  enabled: boolean;
  frmCtrl: AbstractControl
}

@Component({
  selector: 'spa-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {
  personForm: FormGroup;
  resEnabled = true;
  resForm: AbstractControl;
  offEnabled = true;
  gymEnabled = true;
  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      core: this.fb.group({
        name: ['', Validators.required],
      }),
      residential: this.fb.group({
        resAdd: ['', Validators.required]
      }),
      office: this.fb.group({
        offAdd: ['', Validators.required]
      }),
      gym: this.fb.group({
        gymAdd: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
  }

  updateForm() {
    this.resEnabled = !this.resEnabled;
    if (this.resEnabled) {
      this.personForm.addControl('residential', this.resForm);
    } else {
      this.resForm = this.personForm.get('residential');
      this.personForm.removeControl('residential');
    }
  }

}
