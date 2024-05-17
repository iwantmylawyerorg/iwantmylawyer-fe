import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ToastrService} from "ngx-toastr";

export const adminGuard: CanActivateFn = (route, state) => {
  const role:string = localStorage.getItem("role");
  const token:string = localStorage.getItem("acces_token");
  const router = inject(Router);
  const toastr = inject(ToastrService);
  if(role == "ADMIN" && token) {
    return true;
  }
  router.navigate(['/login']);
  toastr.error("You have to login as Admin!")
  return false;
};
