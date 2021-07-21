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
    this.postOnInit();
    
  }

  ngOnChanges(){
    if(this.currentClaim != {}){
      
    }
  }

  claims       : any        = {} 
  cases        : Array<any> = []
  selectedCase : Array<any> = []

  postOnInit(){
    this.service.postOninitNewCase(this.currentClaim).then( (response: any) => {
      if(response){
         
        this.claims = response;
        this.getAllCases()
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
 
  getAllCases(){
    this.service.getAllCases().subscribe((response:any) => {
      
      this.cases = response;
      this.selectedCase = response.id;

    }); 
  }
  getCaseById(id:any){
    this.service.getCasebyId(id).subscribe((response:any) => {
      
      this.claims = response;
      

    });
  }





}
