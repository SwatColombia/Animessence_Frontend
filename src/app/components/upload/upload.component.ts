import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  formData = {
    name: '',
    description: '',
    price: 0,
    user: '',
    nationality: '',
    image: null,
    file: null
  };
  imagePreview: string | ArrayBuffer | null = null;
  showPreview = false;
  toastrService: any;

  onSubmit() {
    this.showPreview = true;
    this.previewImage();
  }

  onImageChange(event: any) {
    this.formData.image = event.target.files[0];
  }

  previewImage() {
    if (this.formData.image) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.formData.image);
    }
    this.toastrService.success('Los datos de tu Asset han sido enviados!', 'Felicidades!!!');
    this.toastrService.info('Recibirás un correo de confirmación en breve', 'Atención');
    
  }

}
