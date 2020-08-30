import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  modelrUrl: string;
  reqCounter = 0;
  disableLoader: boolean | string = false;
  spinner = new Subject<boolean>();


  constructor(private commonService: CommonService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.disableLoader = req.headers.get('disableLoader');
    this._requestInterceptor();
    return next.handle(this._requestOptions(req)).pipe(
      catchError(error => this._onCatch(error, req, next)),
      finalize(() => this._responseInterceptor())
    );
  }

  protected _requestInterceptor(): void {
    this.reqCounter++;
    if (this.reqCounter > 0) {
      if (!this.disableLoader) {
        (document.querySelector('body') as HTMLElement).style.pointerEvents = 'none';
        (document.querySelector('body') as HTMLElement).style.opacity = '0.7';
        this.spinner.next(true);
      }
    }

  }

  protected _responseInterceptor() {
    this.reqCounter--;
    if (this.reqCounter < 1) {
      if (!this.disableLoader) {
        (document.querySelector('body') as HTMLElement).style.pointerEvents = 'auto';
        (document.querySelector('body') as HTMLElement).style.opacity = '1.0';
        this.spinner.next(false);
      }
    }
  }

  protected _requestOptions(req?: HttpRequest<any>) {
    return req;
  }

  protected _onCatch(err: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return throwError(err);
  }
}
