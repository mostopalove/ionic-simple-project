import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';
import {PostModel} from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: PostModel[] = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.posts = this.postsService.getPosts();
  }

}
