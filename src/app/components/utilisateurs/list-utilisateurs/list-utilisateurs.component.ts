import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import { environment } from '../../../../environments/environment';
import {MatIconModule} from '@angular/material/icon';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AjoutUtilisateursComponent } from '../ajout-utilisateurs/ajout-utilisateurs.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit {

  modalRef: BsModalRef;
  public dataForm: FormGroup;
  baseUrl = environment.baseUrl;
  data: any = [];
  dataSource: any = [];
  constructor(private dataService: SharedService, private modalService: BsModalService, private fb: FormBuilder) { }
  ngOnInit() {
    this.dataService.getdata(this.baseUrl + 'admin/users').subscribe(
      (data: any) => {
        this.dataSource.data = data['hydra:member'];
        console.log(this.dataSource.data);
      })
  }
  openModal() {
    this.modalRef = this.modalService.show(AjoutUtilisateursComponent,
      { initialState: {dataForm: this.dataForm }, ignoreBackdropClick: true, animated: true, keyboard: true, class: 'modal' });
}
}
