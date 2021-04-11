import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from '../post.model';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit, OnDestroy {
  @Input() post: PostModel;
  subscription: Subscription;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.paramMap.subscribe(paramsMap => {
      if (!paramsMap.has('postId')) {
        return;
      }
      const postId = paramsMap.get('postId');
      this.post = this.postsService.getPost(postId);
      if (!this.post.id) {
        this.router.navigate(['/posts']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.alertCtrl.create({
      header: 'Do you want to delete the post?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            this.postsService.deletePost(this.post.id);
            this.router.navigate(['/posts']);
          }
        }
      ]
    }).then(alert => alert.present());
  }

}
