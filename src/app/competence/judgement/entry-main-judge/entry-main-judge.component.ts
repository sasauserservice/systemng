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
  @Input() firstMainStatus : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() claimObjet = new EventEmitter<any>();
  @Output() eventFinishCreate = new EventEmitter<any>();
  @Output() launchMainJudgeStatus = new EventEmitter<any>();
  constructor(private service: JudgementService) { }

  globalPoints:number = 0;
  
  ngOnInit(): void {
    this.getParamsAndCriterias();
    this.service.getGeneralJudgmentParams(this.entryid).subscribe((response:any) => {      
      this.paramsforsend = response;
        
      this.service.getPenaltyJudgmentParams(this.entryid).subscribe((response:any) => {      
        this.paramsforsend.penaltyTotal = response.penaltyTotal;
        let total = this.paramsforsend.generalTotal - this.paramsforsend.penaltyTotal;
        this.total = (total > 0 )? total : 0;             
      });           
     });

  }



   

  ngOnChanges(){
      
    if(this.changes == 1){
      setTimeout(()=>{
        this.ngOnInit()
        this.stateChange.emit(0);
      },500)
      
    }
    
  }

  params :any = {};
  paramsforsend :any = {};
  aviableSend : any = false;
  total : any = 0;
  hitzero : any = false;
  peruserData: any = {}


  getSpecInfo(){
    this.service.getJudgeSpec(this.entryid).subscribe((response:any)=>{
      this.peruserData = response
    });
  }

  getParamsAndCriterias(){
    this.service.getMainjudge(this.entryid).subscribe((response:any) => {
      console.log("main    ",response)
     this.params = response;
     this.params.parameters.forEach((element:any) => {
       this.globalPoints += element.total
     })
     this.setHitZero()
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
      let total = this.paramsforsend.generalTotal - this.paramsforsend.penaltyTotal
      this.total = (total > 0 )? total : 0;
      this.aviabSending()
      let self = this;
      setTimeout(function(){
        self.sendGeneralQuals()
      },500);
     
    });
  }
  setHitZero(){
    let hit = true;
    this.params.penalties.forEach((element:any)=>{
      console.log(element.judgements.length);
      if(hit == true){
        if(element.judgements.length == 0){
        hit = true
      }else{
        hit = false
      }
      }
      
      this.hitzero = hit;
    });
    
  }


  sendGeneralQuals(){
    this.paramsforsend.judge = 0;
    this.paramsforsend.penalties = this.params.penalties;
    
    this.service.sendMain(this.paramsforsend).then( (response: any) => {
    if(response){
    Swal.fire({
    title: 'Success!',
    text: '', 
    icon: 'success',
    showCancelButton: false,
    showConfirmButton: false
    }); 
    this.launchMainJudgeStatus.emit(1);
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
    if(this.aviableSend){
    }else{
     /* Swal.fire({
        title: 'Info!',
        text: 'Evaluate all Params',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });*/

    }
   
  }

  

}
