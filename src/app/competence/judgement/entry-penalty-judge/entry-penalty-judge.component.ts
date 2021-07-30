import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { JudgementService} from '../judgement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entry-penalty-judge',
  templateUrl: './entry-penalty-judge.component.html',
  styleUrls: ['./entry-penalty-judge.component.scss']
})
export class EntryPenaltyJudgeComponent implements OnInit {

  @Input() entryid : any = 0;
  @Output() eventFinishCreate = new EventEmitter<any>();
  @Output() launchPenaltyJudgeStatus = new EventEmitter<any>();  
  @Output() launchMainJudgeStatus = new EventEmitter<any>();  
  constructor(private service: JudgementService) { }

  params :any = {}
  allCount : any = 0

  ngOnInit(): void {
    this.getParamsAndCriterias()
  }

  getParamsAndCriterias(){
    this.service.getPenaltyJudgmentParams(this.entryid).subscribe((response:any) => {
      this.params = response
      this.calPenaltyesCount()
    });
  }

  viewRightValue(input:any,max:number){
    setTimeout(function(){
      console.log(input.target.value);
      console.log(max);
      if(input.target.value > max){
        input.target.value = max
      }
    },50);
     
  }

  calculateTotal(index:number){
    let all = 0;
    this.params.judging[index].criteria.forEach((element:any) => {
      all += element.qualpoints;
    });
    this.params.judging[index].qualtotal = all;
  }

  changeFlagStatus(index:number,flagState:number){
     
    this.params.penalty[index].flag = flagState;
    this.launchPenaltyJudgeStatus.emit(flagState)
  } 

  calPenaltyesCount(){
    let cuenta = 0
    this.params.penalty.forEach((element:any) => {
      if(element.judgements){
        cuenta += element.judgements.length
        console.log(element.judgements)
      
      }

      
    })
    
      this.allCount = cuenta
  }



  addPenal(index:number){
    this.changeFlagStatus(index,0)
    let obj = {time:{ min:0, sec:0 },coment:''};

    if(this.params.penalty[index].judgements){
       this.params.penalty[index].judgements.push(obj);
    }else{
      this.params.penalty[index].judgements = [];
      this.params.penalty[index].judgements.push(obj);
    }
    this.setTotal()
    this.calPenaltyesCount()
  }
  setTotal(){

    let totalPoints = 0;
    this.params.penalty.forEach((element:any) => {
     
      if(element.judgements){
        totalPoints += element.judgements.length * element.points;
      }
    });

    this.params.penaltyTotal = totalPoints;
  }
  sendPenaltyQuals(){

    this.params.judge = 0;
    this.service.sendPenalties(this.params).then( (response: any) => {
      if(response){
        Swal.fire({
          title: 'Success!',
          text: '', 
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false
        });
        this.getParamsAndCriterias();
        this.eventFinishCreate.emit();
        this.launchPenaltyJudgeStatus.emit(1)
        this.launchMainJudgeStatus.emit(0)
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
  }

  deletePenal(parentindex:number,index:number){
    this.params.penalty[parentindex].judgements.splice(index,1);
    this.setTotal()
    this.calPenaltyesCount()

  }


}
