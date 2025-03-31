import { Component } from '@angular/core';


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
  }

}
