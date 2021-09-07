import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({

  
  selector: 'app-resultpage',
  templateUrl: 'resultpage.component.html',
  styleUrls: ['resultpage.component.css']
})
export class ResultpageComponent implements OnInit {


  id:any;
  results:any;

  public baseUrl = "https://devapi.luckytrip.co.uk/api/2.0/top_five/destination?id=";
  constructor(
    private router: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.router.params.subscribe(data=>{
      this.id=data.id;
    }); 
    this.getData(this.id)
    // let x = this.router.url;
    // console.log(x);
  }

  getData(id:number){
    this.httpClient.get<any>(this.baseUrl+id).subscribe((res) => {
      this.results =[];
      Object.assign(this.results, res);
    })
  }
 


}

