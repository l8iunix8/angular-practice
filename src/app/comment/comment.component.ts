import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {

  @Input() commentData = {};
  commentResponse = {};
  getCommentResponseByCommentIdSubscription$ = new Subscription();


  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getCommentResponseByCommentIdSubscription$ =
      this.service.getCommentResponseByCommentId(this.commentData['id']).pipe(take(1))
        .subscribe((commentResponse) => {
          this.commentResponse = commentResponse;
        });
  }

  ngOnDestroy(): void {
    this.getCommentResponseByCommentIdSubscription$.unsubscribe();
  }

}
