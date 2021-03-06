import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly rootUrl = 'https://localhost:44359/Notification';

  constructor(private http: HttpClient) { }

  saveSubscription(clientName:string, sub: any):Observable<any>{

    return this.http.post(`${this.rootUrl}/subscribe/${clientName}`, JSON.stringify(sub), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  removeSubscription(clientName: string){
    return this.http.post(`${this.rootUrl}/unsubscribe/${clientName}`, clientName);
  }

  sendNotification(clientName: string){
    return this.http.post(`${this.rootUrl}/notify?client=${clientName}`, null, { responseType: 'text' });
  }
}
