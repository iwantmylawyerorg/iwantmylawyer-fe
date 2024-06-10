import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {jwtDecode} from "jwt-decode";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {from, switchMap} from "rxjs";
import { Constant } from '../constant/constant';


export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const refreshToken = localStorage.getItem("refresh_token");
  const accessToken = localStorage.getItem("acces_token");

  const permitAll = [
    Constant.REGISTER_CLIENT,
    Constant.REGISTER_LAWYER,
    Constant.CITY,
    Constant.GET_LAWYER,
    Constant.GET_ALL_LAWYER,
    Constant.GET_ALL_POSTS,
    Constant.GET_ARTICLE,
    Constant.GET_REFRESH_TOKEN,

  ]
  if (req.url.includes("/api/v1/auth")) {
    return next(req);
  }
  if (req.url.includes(Constant.REGISTER_CLIENT) &&req.method.toUpperCase() === "POST" ) {
    return next(req);
  }
  if (req.url.includes(Constant.REGISTER_LAWYER) && req.method.toUpperCase() === "POST") {
    return next(req);
  }
  if (req.url.includes(Constant.CITY)) {
    return next(req);
  }
  if (req.url.includes(Constant.GET_LAWYER)&& req.method.toUpperCase() === "GET") {
    return next(req);
  }
  if (req.url.includes(Constant.GET_ALL_LAWYER)&& req.method.toUpperCase() === "GET") {
    return next(req);
  }
  if (req.url.includes(Constant.GET_ALL_POSTS) && req.method.toUpperCase() === "GET") {
    return next(req);
  }
  if (req.url.includes(Constant.GET_ARTICLE) && req.method.toUpperCase() === "GET") {
    return next(req);
  }
  if (req.url.includes(Constant.GET_REFRESH_TOKEN)) {
    return next(req);
  }


  if (req.url.includes(Constant.GET_LOGOUT)){
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${refreshToken}`
      }
    });
    return next(authReq);
  }

  if (accessToken) {
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
