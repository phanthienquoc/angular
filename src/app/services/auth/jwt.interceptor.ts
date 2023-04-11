import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // redirect to the login route
              // or show a modal
            }
          }
        }
      )
    );
  }
}

// return next.handle(request).pipe(
//     catchError((err) => {
//       if (err instanceof HttpErrorResponse) {
//           if (err.status === 401) {
//           // redirect user to the logout page
//        }
//     }
//     return throwError(err);
//   })
//  )
// }
