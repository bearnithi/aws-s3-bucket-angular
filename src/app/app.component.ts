import { Component } from '@angular/core';
import { S3ServiceService } from './s3-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private s3Service: S3ServiceService) { }


  onFileSelect(e: any) {
    // with presigned url
    this.s3Service.uploadFileWithPreSignedURL(e.target.files[0]);

    // without presigned url
    // this.s3Service.uploadFile(e.target.files[0]);
  }
}
