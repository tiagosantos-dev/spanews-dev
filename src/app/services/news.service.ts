import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import News from '../models/news';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

 private URL: string= "https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=922688bb56934a16b401376206e6f2a5";

  constructor(private httpClient : HttpClient) { }



  httpsOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json','x-api-key': `922688bb56934a16b401376206e6f2a5`})

  }
  public Error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  public getNews(category :string) :Observable<any>{
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=922688bb56934a16b401376206e6f2a5`).pipe(retry(2),catchError(this.Error))

  }
  public findNews(palavra :string) :Observable<any>{
    return this.httpClient.get<any>(`https://newsapi.org/v2/everything?q=${palavra}&language=pt&apiKey=922688bb56934a16b401376206e6f2a5`).pipe(retry(2),catchError(this.Error))

  }

  

}
