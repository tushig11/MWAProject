import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../../../services/calculation.service';

@Component({
  selector: 'app-tags',
  template: `
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="24">
      <h2>Tags</h2>
      <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
    </div>  
  </div>
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="6">
      <nz-input-group [nzSuffix]="suffixIconSearch">
        <input type="text" nz-input placeholder="input search text" />
      </nz-input-group>
      <ng-template #suffixIconSearch>
        <i nz-icon nzType="search"></i>
      </ng-template>
    </div>  
    <div nz-col [nzSpan]="18">
      <nz-button-group class="fRight">
        <button nz-button nzType="primary" >Popular</button>
        <button nz-button nzType="default" >New</button>
        <button nz-button nzType="default">Name</button>
      </nz-button-group>
    </div>
  </div>
  <br/>
  <nz-list [nzSize]="large" [nzDataSource]="toptags" [nzRenderItem]="item" [nzGrid]="{ gutter: 16, xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }">
    <ng-template #item let-item>
      <nz-list-item [nzContent]="nzContent">
        <ng-template #nzContent>
         
          <nz-card [nzTitle]="item.name"  [nzExtra]="extraTemplate">
            {{item.description}}
          </nz-card>
          <ng-template #extraTemplate>
            <nz-badge [nzCount]="item.count" [nzOverflowCount]="1000"></nz-badge>
          </ng-template>

        </ng-template>
      </nz-list-item>
    </ng-template>
  </nz-list>
  `,
  styles: []
})
export class TagsComponent implements OnInit {
  gutterSize: number = 24;
  userinfo;
  tags$;
  
  toptags;
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
    {
      title: 'Title 5'
    },
    {
      title: 'Title 6'
    }
  ];
  constructor(private calcService: CalculationService) { }

  ngOnInit() {
    //this.tags$ = this.calcService.getTopTags();
    this.calcService.getTopTags()
    .subscribe(res => { this.toptags = res; 
      console.log(this.toptags);
    });
    
  }

}
