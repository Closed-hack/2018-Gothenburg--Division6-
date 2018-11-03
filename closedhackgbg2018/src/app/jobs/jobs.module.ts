import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NgxChartsModule
  ]
})
export class JobsModule { }
