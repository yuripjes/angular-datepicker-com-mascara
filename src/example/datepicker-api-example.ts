import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

/** @title Datepicker open method */
@Component({
  selector: 'datepicker-api-example',
  templateUrl: 'datepicker-api-example.html',
  styleUrl: 'datepicker-api-example.css',
  standalone: true,
  providers: [provideNativeDateAdapter(), provideNgxMask()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
})
export class DatepickerApiExample {
  dataSelecionada: Date = new Date();

  dataMascarada: string;





    onChange(event: any) {
    console.log('onChange',event)
    // console.log(event);
    //this.dateForm.get('date').setValue(event);
     this.dataSelecionada = event;
    this.onBlur();
  }

  todate(event: any) {
     console.log('todate',event)
    //this.dateForm.get('date').setValue(new Date(value));
    this.dataSelecionada = new Date(event?.target?.value)

  }

  onBlur() {
    if ( this.dataSelecionada) {
      //this.onChangeCallback(this.dateForm.controls.date);
    }
  }
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
