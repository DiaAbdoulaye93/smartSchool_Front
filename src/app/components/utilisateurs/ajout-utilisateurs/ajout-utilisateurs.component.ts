import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-ajout-utilisateurs',
  templateUrl: './ajout-utilisateurs.component.html',
  styleUrls: ['./ajout-utilisateurs.component.css']
})
export class AjoutUtilisateursComponent implements OnInit {
  @Input() dataForm: FormGroup;
  constructor() {}
  ngOnInit(): void {}
}
