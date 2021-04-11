import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePostPageRoutingModule } from './create-post-routing.module';

import { CreatePostPage } from './create-post.page';
import {ImagePickerComponent} from './image-picker/image-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePostPageRoutingModule
  ],
  declarations: [CreatePostPage, ImagePickerComponent]
})
export class CreatePostPageModule {}
