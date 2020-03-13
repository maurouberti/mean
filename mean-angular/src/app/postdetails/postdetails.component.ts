import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../services/post';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {

  post: Post;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.appService.fetch(params.slug).subscribe(res => this.post = res.post);
    });
  }

}
