import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { isAuthenticated } from 'src/app/modules/auth/store/selectors';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate() {
    return this.store.select(isAuthenticated).pipe(
      take(1),
      map((authenticate) => {
        if (!authenticate) {
          return this.router.createUrlTree(['login']);
        }
        return true;
      })
    );
  }
}
