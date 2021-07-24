import { Component, OnInit,Input } from '@angular/core'
import { Select2OptionData } from 'ng-select2';
import {ClaimsService} from '../claims.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-claims-generator',
  templateUrl: './claims-generator.component.html',
  styleUrls: ['./claims-generator.component.scss']
})
export class ClaimsGeneratorComponent implements OnInit {

  @Input() currentClaim:any = {}
  constructor(private service: ClaimsService) { }

  ngOnInit(): void {
    this.postOnInit()
    
  }

  ngOnChanges(){
    if(this.currentClaim != {}){
      
    }
  }

  claims       : any        = {} 
  cases        : Array<any> = []
  selectedCase : Array<any> = []
  currentUser  : any        = 0
  messageString: string = ''

  firstTime : any        = false
  loading   : any        = false

  postOnInit(){
    this.service.postOninitNewCase(this.currentClaim).then( (response: any) => {
      if(response){
         
        
        if(response.claim.firsttime){
          this.firstTime = true
        }else{
          this.claims = response
          this.getAllCases()
        }
      }
    }).catch((error: any) => { 
      if(error){
        Swal.fire({
          title: 'Info!',
          text: 'Error on server',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false
        })
      }
    }) 
  }

  sendFirstMessage(){
    if(this.messageString != ''){
      this.service.postFirstTimeNewCase(this.currentClaim).then((response: any) => {
            if(response){
              alert('ya se creo');
              this.claims = response
              this.getAllCases()
              this.firstTime = false
              this.sendNewMessageMessage()

            }
          }).catch((error: any)=>{
            if(error){
              Swal.fire({
                title: 'Info!',
                text: 'Error on server',
                icon: 'info',
                showCancelButton: false,
                showConfirmButton: false
              })
            }
          })
    }else{
      Swal.fire({
        title: 'Info!',
        text: 'Message Empty',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      })
    }
    
  }

  sendNewMessageMessage(){
    if(this.messageString != ''){
      let objMsge = {}
    objMsge = {
      "sender": this.currentUser, 
      "date": new Date().toISOString(),
      "text": this.messageString
    }
    const objReply = this.claims;
    objReply.claim.messages.push(objMsge)
    this.service.postNewMessage(objReply.claim).then((response: any)=>{ 
      if(response){
        this.messageString = ''
        this.claims = response
      }
    }).catch((error: any) =>{

    })
    }else{
      Swal.fire({
        title: 'Info!',
        text: 'Message Empty',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      })
    }
    
  }
 
  getAllCases(){
    this.service.getAllCases().subscribe((response:any) => {
      
      this.cases = response;
      this.selectedCase = response.id;

    }); 
  }
  getCaseById(id:any){
    alert(id)
    this.service.getCasebyId(id).subscribe((response:any) => {
      
      this.claims = response;
      

    });
  }





}
