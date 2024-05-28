import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ERROR, INFO, SUCCESS, WARNING } from '../../config/alert.sweet.constant';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  successAlert(message: any, title?: any) {
    Swal.fire({
         icon: SUCCESS,
         text:  message,
         showConfirmButton: false,
         color: '#fff',
         background:"#126E51",
         timerProgressBar: true,
         timer: 6000
       }
    )
  }

  infoAlert(message: any, title?: any) {
    Swal.fire(
      {
        icon: INFO,
        text:  message,
        showConfirmButton: false,
        color: '#000',
        background:"#fff",
        timerProgressBar: true,
        timer: 6000
      }
    )
  }

  warningAlert(message: any, title?: any) {
    Swal.fire(
      {
        icon: WARNING,
        text: message,
        showConfirmButton: false,
        color: '#facea8',
        background:"#fff",
        timerProgressBar: true,
        timer: 6000
      }
    )
  }

  errorAlert(message: any, title?: any) {
    Swal.fire(
      {
        icon: ERROR,
        text:  message,
        showConfirmButton: false,
        color: '#f27474',
        background:"#fff",
        timerProgressBar: true,
        timer: 6000
      }
    )
  }
  defaultSuccessAlert(message: any, title?: any) {
    Swal.fire({
         icon: SUCCESS,
         text:  message,
         showConfirmButton: false,
         color: '#fff',
         background:"linear-gradient(to right,#156d56 , #52864d)",
         timerProgressBar: true,
         timer: 4000
       }
    )
  }

  defaultErrorAlert(message: any, title?: any) {
    Swal.fire(
      {
        icon: ERROR,
        text: message,
        showConfirmButton: false,
        color: '#f27474',
        background:"#fff",
        timerProgressBar: true,
        timer: 6000
      }
    )
  }
  CustomSuccessAlert(message: any, title?: any) {
  return  Swal.fire({
         icon: SUCCESS,
         text:  message,
         title:title,
         color: '#000',
         background:"linear-gradient(to right,#156d56 , #52864d)",
         confirmButtonColor: '#146D56',
         showCancelButton: true,
         showConfirmButton: true,
         cancelButtonText: 'Non',
         confirmButtonText: 'Oui'
       }
    )
  }

  confirmAlert(message: any, title?: any) {
    return  Swal.fire({
          //  icon: SUCCESS,
           text:  message,
           title:title,
           color: '#fff',
           background:"linear-gradient(to right,#156d56 , #52864d)",                    
           showConfirmButton: true,
           confirmButtonColor: '#146D56',
           showCancelButton: true,
           cancelButtonText: 'Non',
           confirmButtonText: 'Oui'
         }
      )
    }
}
