import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  template: `
    <p>
      tags works!
    </p>


  <div nz-row>

    <div nz-col nzSpan="14">
        left
    </div> 
    <div nz-col nzSpan="5">
        right
    </div> 
    
  </div>



  `,
  styles: []
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
