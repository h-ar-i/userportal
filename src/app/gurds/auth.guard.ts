import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminAPIService } from '../adminAPIServices/admin-api.service';

export const authGuard: CanActivateFn = () => {
  const authService=inject(AdminAPIService)
  const router=inject(Router)

  if(authService.isAuthorized()){
    return true;
  }else{
    alert("operation denied....please login to continue")
    router.navigateByUrl('')
    return false;
  }
};
