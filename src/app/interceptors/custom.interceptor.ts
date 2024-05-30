import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {jwtDecode} from "jwt-decode";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {from, switchMap} from "rxjs";


export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const refreshToken = localStorage.getItem("refresh_token");
  const accessToken = localStorage.getItem("acces_token");

  if(req.url.includes("/api/v1/auth")){
    return next(req);
  }

  if(accessToken) {
    const decodeTokenExp: number = jwtDecode(accessToken).exp;
    const currentTime: number = Date.now() / 1000;
    const isExpired: boolean = decodeTokenExp < currentTime
    if (!isExpired) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return next(authReq);
    } else {
      console.log("pompaaaaa")
      return from(authService.getJwtTokenByRefreshToken(refreshToken)).pipe(
        switchMap(newTokens => {
          const newAccessToken = newTokens.accessToken;
          const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${newAccessToken}`
            }
          });
          return next(authReq);
        })
      );
    }
  }
  return next(req);

};
