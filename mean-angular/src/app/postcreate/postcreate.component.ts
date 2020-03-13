import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { AppService } from './../services/app.service'

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.scss']
})
export class PostcreateComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    title: ["", Validators.required],
    body: ["", Validators.required]
  });

  constructor(
    private appService: AppService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.appService.fetchServer().subscribe(data => console.log(data))
  }

  create(e) {
    this.appService.save(this.form.value.title, this.form.value.body)
      .subscribe(() => this.clear())
        // console.log(result);
        // this.router.navigate(['/list']);
  }

  clear() {
    this.form = this.fb.group({
      title: ["", Validators.required],
      body: ["", Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }
}
