import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {ToastrService} from "ngx-toastr";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const role:string = localStorage.getItem("role");
  const token:string = localStorage.getItem("acces_token");
  const router = inject(Router);
  const toastr = inject(ToastrService);
  if((role == "LAWYER" || role == "LAWYER_UNCONFIRMED") && token) {
    return true;
  }
  if((role == "CLIENT" || role =="ADMIN") && token) {
    toastr.error("You have to login as Lawyer!")
    router.navigate(['']);
    return false;
  }
  router.navigate(['/login']);
  toastr.error("You have to login as Lawyer!")
  return false;
};
