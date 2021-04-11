import {Injectable} from '@angular/core';
import {PostModel} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: PostModel[] = [
    {
      id: 'p1',
      title: 'The best Pie!',
      description: 'This is pie number ONE!!!',
      image: 'https://www.cookingclassy.com/wp-content/uploads/2020/09/chess-pie-2.jpg'
    },
    {
      id: 'p2',
      title: 'It is also pie!',
      description: 'I want to eat it!',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2019/05/Apple-pie-eccbfb3.jpg'
    },
  ];

  constructor() {
  }

  getPosts(): PostModel[] {
    return [...this.posts];
  }

  getPost(id: string): PostModel {
    return {...this.posts.find(p => p.id === id)};
  }

  deletePost(id: string): void {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  createNewPost(postObj: PostModel) {
    this.posts.push(postObj);
  }
}
