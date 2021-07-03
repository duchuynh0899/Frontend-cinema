import { Directive } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive()
export abstract class AbstractUpLoadImageDirective {
  selectedFile: File;
  url: string | ArrayBuffer;
  constructor(protected snack: MatSnackBar) { }

  onSelectFile(file: File): void {
    const type = ['gif', 'jpg', 'png', 'jpeg', 'bmp'];
    if (file && type.includes(file.type.split('/')[1]) && file.size < 5000000) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = e => {
        this.url = e.target.result;
      };
    }
    else {
      this.snack.open('Failed', 'X');
    }
  }
}
