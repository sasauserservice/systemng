import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { JudgementService} from '../judgement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entry-general-judge',
  templateUrl: './entry-general-judge.component.html',
  styleUrls: ['./entry-general-judge.component.scss']
})
export class EntryGeneralJudgeComponent implements OnInit {

  @Input() entryid : any = 0;
  @Input() changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() eventFinishCreate = new EventEmitter<any>();  
  @Output() launchGeneralJudgeStatus = new EventEmitter<any>();  
  @Output() launchMainJudgeStatus = new EventEmitter<any>();  
  constructor(private service: JudgementService) { }

  globalPoints : number = 0
  params :any = {}
  aviableSend : any = false

  specByJudge: any = {}
   
  getSpecInfo(){
    this.service.getJudgeSpec(this.entryid).subscribe((response:any)=>{
      this.specByJudge = response
    });
  }

  ngOnInit(): void {
    
    this.getParamsAndCriterias()
    this.getSpecInfo()
    
    
    
  }



  calglobalFlag(){
    let flag = 1;
    this.params.judging.forEach((element:any) => {
      
    
        if(flag != 0){
          flag = element.flag;
        }
    
    })
    this.params.globalFlag = flag;
    if(flag == 1){
      this.launchGeneralJudgeStatus.emit(flag);
    }
  }

 
  ngOnChanges(){
      
      if(this.changes == 1){
        this.getParamsAndCriterias();
        this.stateChange.emit(0);
      }
      
    } 

  getParamsAndCriterias(){
    this.globalPoints = 0
    this.service.getGeneralJudgmentParams(this.entryid).subscribe((response:any) => {
      
     this.params = response;
     let self = this;
     this.params.judging.forEach((element:any) => {
       
       element.criteria.forEach((criteria:any) => {
        this.globalPoints += criteria.points
       })
     })
     
      //self.aviabSending()
      self.calculateTotalInit()
      self.calglobalFlag()
     
     
    });
  }

  viewRightValue(input:any,max:number,paramindex:number,criteriaindex:number){
    let self = this


    let eventFrame = new Event("change")
    
      
      if(input.target.value > max){
        input.target.value = max
        input.target.dispatchEvent(eventFrame)
        this.params.judging[paramindex].criteria[criteriaindex].qualpoints = max
      }

      self.aviabSending();
        
  }

  aviabSending(){
    let ret = true;
    this.params.judging.forEach((element:any) => {
     //console.log(element);
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

  calculateTotal(index:number){
    this.params.judging[index].flag = 0;
    this.launchGeneralJudgeStatus.emit(0);
    let all = 0;
    this.params.judging[index].criteria.forEach((element:any) => {
      
      all += element.qualpoints;
    }); 
    if(all){
      this.params.judging[index].qualtotal = all;
      let total = 0;
      this.params.judging.forEach((element:any) => {
        if(element.qualtotal){
         total += element.qualtotal;
        }
      });
      this.params.generalTotal = total;
    }

    this.params.globalFlag = 0 
      


      this.aviabSending();
    
  } 

  calculateTotalInit(){
     this.params.judging.forEach((elemento:any,index:any) => {
      let all = 0;
      this.params.judging[index].criteria.forEach((element:any) => {
        
        all += element.qualpoints;
      }); 
      if(all){
        this.params.judging[index].qualtotal = all;
        let total = 0;
        this.params.judging.forEach((element:any) => {
          if(element.qualtotal){
           total += element.qualtotal;
          }
        });
        this.params.generalTotal = total;
      }
     });
    
      


      this.aviabSending();
    
  } 
 
  sendGeneralQuals(){
    if(this.aviableSend){
      this.params.judge = 0;
      this.service.sendGenerals(this.params).then( (response: any) => {
      if(response){
      Swal.fire({
      title: 'Success!',
      text: '', 
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false
      });
      this.ngOnInit();
      
      this.eventFinishCreate.emit()
      this.launchMainJudgeStatus.emit(0)
      this.launchGeneralJudgeStatus.emit(1)
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
