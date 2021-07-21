import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { JudgementService} from '../judgement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entry-main-judge',
  templateUrl: './entry-main-judge.component.html',
  styleUrls: ['./entry-main-judge.component.scss']
})
export class EntryMainJudgeComponent implements OnInit {

  @Input() entryid : any = 0;
  @Input() changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() claimObjet = new EventEmitter<any>();
  @Output() eventFinishCreate = new EventEmitter<any>();
  constructor(private service: JudgementService) { }

  ngOnInit(): void {
    this.getParamsAndCriterias();
    this.service.getGeneralJudgmentParams(this.entryid).subscribe((response:any) => {
      
      this.paramsforsend = response;
      
      
     });

  }

   

  ngOnChanges(){
      
    if(this.changes == 1){
      this.getParamsAndCriterias();
      this.stateChange.emit(0);
    }
    
  }

  params :any = {};
  paramsforsend :any = {};
  aviableSend : any = false;
  getParamsAndCriterias(){
    this.service.getMainjudge(this.entryid).subscribe((response:any) => {
      
     this.params = response;
    });
  }

  openClaimGenerator(type:any,paramId:any){
    let claimobj = 
    {
      "eventid":this.paramsforsend.participation.event_id,
      "entryid":this.paramsforsend.participation.id,
      "competitor":this.paramsforsend.participation.participant_id,
      "judge":0,
      "parametro":paramId,
      "typecase":type
    }

    this.stateChangeBar.emit(0);
    let self = this;
    setTimeout(function(){
      self.stateChangeBar.emit(14);
      self.claimObjet.emit(claimobj);
    },500)
    
  }


  aviabSending(){
    let ret = true;
    this.paramsforsend.judging.forEach((element:any) => {
     console.log(element);
      if(ret){
         
        if(!element.qualtotal){
          if(element.qualtotal == 0 || element.qualtotal == '0'){
             
          }else{  
             
            ret = false;
          }
        }else{
           
        }
      }
      
    });
    this.aviableSend = ret;    
  }
  getParamsAndCriteriasforSend(){
    this.service.getGeneralJudgmentParams(this.entryid).subscribe((response:any) => {
      
     this.paramsforsend = response;
     this.aviabSending()
     let self = this;
     setTimeout(function(){
      self.sendGeneralQuals()
     },500);
     
    });
  }

  sendGeneralQuals(){
    if(this.aviableSend){
      this.paramsforsend.judge = 0;
      this.service.sendMain(this.paramsforsend).then( (response: any) => {
      if(response){
      Swal.fire({
      title: 'Success!',
      text: '', 
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false
      });
      this.getParamsAndCriterias();
     // this.eventFinishCreate.emit();
      }
      }).catch((error: any) => {
      if(error){
      Swal.fire({
      title: 'Info!',
      text: 'Error on server',
      icon: 'info',
      showCancelButton: false,
      showConfirmButton: false
      });
      }
      } ); 
    }else{
      Swal.fire({
        title: 'Info!',
        text: 'Evaluate all Params',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });

    }
   
  }

  

}
