import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {StorageService } from '../shared/storage.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sasa-auth',
  templateUrl: './sasa-auth.component.html',
  styleUrls: ['./sasa-auth.component.scss']
})
export class SasaAuthComponent implements OnInit {

  constructor(private authserv: AuthService, private storageServ: StorageService, private router: Router) { }

  form : object = {
    email: '',
    pass: '',
  };

  email : string = '';
  password : string = '';

  ngOnInit(): void {
  }

  doLogin() : void {
    this.authserv.authenticateUser(this.email, this.password).then( (resp: any) => {
      console.log(resp);
      this.storageServ.setCurrentSession(resp);
      let texto : string = resp.Message;
      Swal.fire({
        title: 'Info!',
        text: texto,
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      setTimeout(()=>{
        this.router.navigate(['/dasboard']);
      }, 3000);


    } ).catch( (error: any) => {
      if(error){
        console.log(error.error);
        let texto : string = error.error.Message;
        if(error.error.Status == 400){
          Swal.fire({
            title: 'Info!',
            text: texto,
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false
          });
        }
        if(error.error.Status == 404){
          Swal.fire({
            title: 'Error!',
            text: texto,
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false
          });
        }
          
      }

    } );
  }

}
