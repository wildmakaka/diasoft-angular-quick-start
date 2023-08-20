import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, exhaustMap, take } from 'rxjs';
import { getCurrentUserToken } from 'src/app/modules/auth/store/selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getCurrentUserToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          return next.handle(request);
        }
        let modifiedReq = request.clone({
          setHeaders: {
            Authorization: token.length > 1 ? `Token ${token}` : '',
          },
        });

        return next.handle(modifiedReq);
      })
    );
  }
} // The End of Class;
