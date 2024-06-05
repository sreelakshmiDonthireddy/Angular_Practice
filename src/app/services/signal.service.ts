import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  private signalSubject: Subject<any> = new Subject<any>();
  constructor() { }
  sendSignal(data: any) {
    this.signalSubject.next(data);
  }
  getSignal(): Observable<any> {
    return this.signalSubject.asObservable();
  }
}
