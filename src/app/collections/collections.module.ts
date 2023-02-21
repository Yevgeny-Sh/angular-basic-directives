import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BiographyComponent,
    PartnersComponent,
    CompaniesComponent,
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    RouterModule
    
  ]
})
export class CollectionsModule { }
