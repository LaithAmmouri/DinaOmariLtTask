import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable,  of } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit{

  public baseUrl = "https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations";
  public searchResults: any;

  constructor(private httpClient: HttpClient) { 

  }

  ngOnInit(){
    alert('test');
  }

  //makes the HTTP request to get the resources and returns the response as observable;  
  public searchEntries(term:Object): Observable<any>{
    if (term === "" ){
      console.log("Not defined");
      return of(null);
      //return empty();
    }else{
      // let params = {q: term }
      return this.httpClient.get(this.baseUrl, {}).pipe(
        map(response => {
          console.log(response)
          // return this.searchResults = response["items"];
        })
      );
    }
    
  }

  //returns the response for the first method
  public _searchEntries(term){
    return this.searchEntries(term);
  }
}
