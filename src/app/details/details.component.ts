import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  singleuser:any;

  ngOnInit(): void {


    //this.singleuser = this.dashcomp.puser;

  }

}
