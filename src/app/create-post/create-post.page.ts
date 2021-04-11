import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  title = '';
  description = '';
  image = '';

  constructor(
    private postsService: PostsService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onImagePick(imageData: string) {
    this.image = imageData;
  }

  onSavePost() {
    if (!this.title.trim() || !this.description.trim() || !this.image.trim()) {
      return;
    }
    this.postsService.createNewPost({
      id: String(Date.now()),
      title: this.title,
      description: this.description,
      image: this.image
    });
    this.title = '';
    this.description = '';
    this.image = '';
    this.router.navigate(['/posts']);
  }

}
