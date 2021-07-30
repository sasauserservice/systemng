import { Component, OnInit, ViewChild,Output, EventEmitter } from '@angular/core';
import { CompetitorService } from '../competitor.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-competitor-create-manager',
  templateUrl: './competitor-create-manager.component.html',
  styleUrls: ['./competitor-create-manager.component.scss']
})
export class CompetitorCreateManagerComponent implements OnInit {

  @Output() eventFinishCreate = new EventEmitter<any>();

  constructor(private service: CompetitorService) { }

  coachList: Array<any> = [];
  coachforSend: Array<any> = ['0',];

  coachforSend2 : Array<any> = [{user: '0'},];

  dataforsend:any = {
    "type": '1', 
    "data": {
      "name":''
    }
  };

  ngOnInit(): void {
    this.getCoaches();
  } 

  getCoaches(){
    this.service.getCoach().subscribe((response:any) => {
      //console.log(response);
      this.coachList = response;
    });
  }
  addCoachForsend(){
    this.coachforSend2.push({user: '0'});
  }
  
  removeCoachForsend(index:number){
    this.coachforSend2.splice(index, 1);
  }

  sendParticipant(){
    let coachforsend = this.coachforSend2.map((value:any)=>{
      return value.user;
    });
    
    let obj:any = {
      "managers": coachforsend,
      "type": this.dataforsend.type, //este es 1 atleta y 2 team
      "data": this.dataforsend.data
    };

    if(coachforsend.includes(0) || this.dataforsend.data.name == '' ){
      Swal.fire({
        title: 'Info!',
        text: 'Not empty values',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    }else{
      this.service.sendCoptetitor(obj).then( (response: any) => {
        if(response){ 
          Swal.fire({
            title: 'Success!',
            text: 'Competitor saved',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.eventFinishCreate.emit();
          //this.penalties = [];
        }
      }).catch((error: any) => {
        
        if(error){
          if(error.status == 401){
             
          }else{
            Swal.fire({
            title: 'Info!',
            text: 'Error on server',
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false
          });
          }
          
        }
      }); 
    }

  }

 



}
 