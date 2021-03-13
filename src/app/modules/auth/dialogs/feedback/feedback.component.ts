import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractUpLoadImageDirective } from '@shared/components/abstract/abstract-upload-image.directive';
import { TValidators } from '@shared/extensions/validators';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent extends AbstractUpLoadImageDirective implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, snack: MatSnackBar) {
    super(snack);
    this.myForm = this.fb.group({
      name: ['', TValidators.required],
      phone: ['', TValidators.required],
      feedback: ['', TValidators.required]
    });
  }

  ngOnInit() {
  }
  getError(control: string) {
    return this.myForm.get(control).getError('error');
  }

}
