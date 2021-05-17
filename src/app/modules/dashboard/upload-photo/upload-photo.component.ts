import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrentUserService } from '@shared/services/current-user.service';
import { FileServiceService } from '@shared/services/file-service.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss'],
})
export class UploadPhotoComponent implements OnInit {
  selectedFile: File;
  url: string | ArrayBuffer;
  id: any;
  files: any;
  constructor(
    private snack: MatSnackBar,
    private currentUserService: CurrentUserService,
    private fileService: FileServiceService
  ) {
    this.currentUserService.user$.subscribe((user) => {
      this.id = user._id;
    });
  }

  ngOnInit() {}
  onSelectFile(value: any) {
    this.selectedFile = value.target.files[0] as File;
    const dots = this.selectedFile.name.split('.');
    const fileType = '.' + dots[dots.length - 1];
    const fileTypes = ['.gif', '.jpg', '.png', '.jpeg', '.bmp'];
    if (
      value.target.files &&
      value.target.files[0] &&
      fileTypes.join('.').indexOf(fileType) !== -1 &&
      this.selectedFile.size < 5000000
    ) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (e) => {
        this.url = e.target.result;
      };
    } else {
      this.snack.open('lỗi', ' x');
    }
    // if (value.target.files && value.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.readAsDataURL(value.target.files[0]); // read file as data url

    //   reader.onload = (event) => {
    //     // called once readAsDataURL is completed
    //     this.url = event.target.result;
    //   };
    // }
  }

  onUpload(): void {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    const data = { file: formData, id: this.id };
    this.fileService.uploadAvatarUser(data).subscribe(
      (res) => {
        this.currentUserService.setCurrentUser(res.user);
        this.snack.open('success');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
