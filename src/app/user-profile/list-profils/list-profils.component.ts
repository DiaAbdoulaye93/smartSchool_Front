import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.css']
})
export class ListProfilsComponent implements OnInit {

  baseUrl = environment.baseUrl;
  data: any = [];
  dataSource: any = [];
  constructor(private dataService: SharedService) { }
  ngOnInit() {
    this.dataService.getdata(this.baseUrl + 'admin/profils').subscribe(
      (data: any) => {
        this.dataSource.data = data['hydra:member'];
       console.log(this.dataSource.data);
      })
  }
}
