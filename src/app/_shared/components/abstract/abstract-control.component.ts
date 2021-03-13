import { ControlValueAccessor, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Input, OnInit, Directive } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { get } from 'lodash-es';

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher implements ErrorStateMatcher {
  public control = new FormControl();
  constructor(private formControlName: string) { }
  isErrorState(_: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    this.control = form.control.get(this.formControlName) as FormControl;
    if (!this.control) { return false; }
    const isSubmitted = form && form.submitted;
    return !!(this.control.invalid && (this.control.dirty || this.control.touched || isSubmitted));
  }
}

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class AbstractControlComponent<T = any> implements ControlValueAccessor, OnInit {

  controlValue: T;

  @Input() disabled = false;
  @Input() autoFocus = false;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControlName: string;

  matcher: ErrorStateMatcher;

  onChangeFn: (val: T) => void = () => void 0;
  onTouchedFn: () => void = () => void 0;

  ngOnInit(): void {
    if (this.formControlName) { this.matcher = new MyErrorStateMatcher(this.formControlName); }
    this.removePlaceHolder();
  }

  writeValue(obj: any): void {
    this.controlValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.removePlaceHolder();
  }

  onModelChange(value: T): void {
    this.onChangeFn(value);
  }

  get error(): any { return get(this.matcher, 'control.errors.error'); }

  private removePlaceHolder(): void {
    if (this.disabled) { this.placeholder = ''; }
  }
}
