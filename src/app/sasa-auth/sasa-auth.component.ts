import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'
import {StorageService } from '../shared/storage.service'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-sasa-auth',
  templateUrl: './sasa-auth.component.html',
  styleUrls: ['./sasa-auth.component.scss']
})
export class SasaAuthComponent implements OnInit {

  constructor(private authserv: AuthService, private storageServ: StorageService, private router: Router, private cookieService: CookieService) { }

  form : object = {
    email: '',
    pass: '',
  }

  email : string = ''
  password : string = ''

  ngOnInit(): void {
  }

  doLogin() : void {
    this.authserv.authenticateUser(this.email, this.password).then( (resp: any) => {

      Swal.fire({
        title: 'Info!',
        text: 'OK',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })

      console.log(resp)

      this.cookieService.set('platformauth', resp.authorization)

      setTimeout(()=>{
        this.router.navigate(['/match'])
      }, 1500)


    } ).catch( (error: any) => {
      if(error){
        console.log(error.error)
        let texto : string = error.error.Message
        if(error.error.Status == 400){
          Swal.fire({
            title: 'Info!',
            text: texto,
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false
          })
        }
        if(error.error.Status == 404){
          Swal.fire({
            title: 'Error!',
            text: texto,
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false
          })
        }
          
      }

    } )
  }

}
