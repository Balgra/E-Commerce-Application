import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('input', {static : true}) input : ElementRef;
  @Input() type = 'text';
  @Input() label: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;

    // @ts-ignore
    const validators = control.validator ? [control.validator] : [];
    // @ts-ignore
    const asyncValidators = control.asyncValidator ? [control.validator] : [];
    // @ts-ignore
    control.setValidators(validators);
    // @ts-ignore
    control.setAsyncValidators(asyncValidators);
    // @ts-ignore
    control.updateValueAndValidity();
  }

  onChange(event: any) {}

  onTouched() {}

  writeValue(obj: any): void
    {
      this.input.nativeElement.value = obj || '';
    }

    registerOnChange(fn: any): void
    {
      this.onChange = fn;
    }

    registerOnTouched(fn: any): void
    {
    this.onTouched = fn;
    }

}
