import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient
  ) { }

  uploadPicture(data) {
    return this.http.post<any>('http://localhost:3000/figures', data).toPromise()
  }

  async takePicture(){
    const capturadedPhoto = await Camera.getPhoto({
      quality: 100,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64,
      allowEditing: true 
    })

    const response = await this.uploadPicture({ picture: capturadedPhoto.base64String});

    return response;
  }
}
