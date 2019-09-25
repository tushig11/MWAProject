import { DataService } from './../../../services/data.service';
import { Component } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    .avatar {
      width: 128px;
      height: 128px;
    }
    .upload-icon {
      font-size: 32px;
      color: #999;
    }
    .ant-upload-text {
      margin-top: 8px;
      color: #666;
    }
  `]
})
export class ProfileComponent{

  numberOfFollowers: number = 4;
  gutterSize: number = 30;
  topics: [String];
  user: any = {
    firstname: "Guest",
    lastname: "Guest",
    biography: ""
  };

  //profile pic
  loading = false;
  avatarUrl: string;
  msg: any;

  questionCount: number;
  constructor(private dataService: DataService, private jwtService: JwtHelperService){}

  ngDoCheck(){
    const token = localStorage.getItem("access_token");
    this.topics = JSON.parse(localStorage.getItem("topics"));
    this.user = this.jwtService.decodeToken(token);
    this.questionCount = JSON.parse(localStorage.getItem("questions")).length;
  }

  onClick(){
    console.log("hello");
  }

  //profile picture
  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      // const isJPG = file.type === 'image/jpeg';
      // if (!isJPG) {
      //   this.msg.error('You can only upload JPG file!');
      //   observer.complete();
      //   return;
      // }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      // check height
      this.checkImageDimension(file).then(dimensionRes => {
        if (!dimensionRes) {
          this.msg.error('Image only 300x300 above');
          observer.complete();
          return;
        }

        observer.next(isLt2M && dimensionRes);
        observer.complete();
      });
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image(); // create image
      img.src = window.URL.createObjectURL(file);
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src!);
        resolve(true);
      };
    });
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
}
