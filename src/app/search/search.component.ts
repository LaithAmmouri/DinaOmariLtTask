import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class SearchComponent implements OnInit {

  searchResults:any;
  public search: string = "";
  public baseUrl = "https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations";

  constructor(
    private router: Router,private httpClient: HttpClient) { }

     ngOnInit() {
      this.getResults();
      //console.log(this.searchResults);
    }
  openLink(id:number){
    
    this.router.navigate(['resultpage', id])
  }

    getResults(){
      this.httpClient.get<any>(this.baseUrl).subscribe((res) => {
        this.searchResults =[];
        Object.assign(this.searchResults, res.destinations);
      })
  }
  getSearchResults(){

    let url = this.baseUrl + '?search_type=city_or_country&search_value=' + this.search;
    this.httpClient.get<any>(url).subscribe((res) => {
      this.searchResults =[];
      Object.assign(this.searchResults, res.destinations);
    })
      
  }

  
}