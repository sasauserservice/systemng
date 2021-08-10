import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import { JudgementService} from '../judgement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entry-global-judgement',
  templateUrl: './entry-global-judgement.component.html',
  styleUrls: ['./entry-global-judgement.component.scss']
})
export class EntryGlobalJudgementComponent implements OnInit {

  @Input() entryId: number= 0
  @Input() extraInfo : any = {}
  
  @Output() launchPenaltyJudgeStatus = new EventEmitter<any>()
  @Output() launchGeneralJudgeStatus = new EventEmitter<any>()  
  @Output() launchMainJudgeStatus = new EventEmitter<any>()
  constructor(private service: JudgementService) { }

  preloader:boolean = true
  specByJudge: any = {}
  statusReloadJudgements : number = 0;


  launchGeneralStatus(val:any){
    this.launchGeneralJudgeStatus.emit(val)
  }
  launchPenalStatus(val:any){
    this.launchPenaltyJudgeStatus.emit(val)
  }
  launchMainlStatus(val:any){
    this.launchMainJudgeStatus.emit(val)
  }

  ngOnInit(): void {
    this.getSpecInfo()
  }

   
  getSpecInfo(){
    this.service.getJudgeSpec(this.entryId).subscribe((response:any)=>{
      if(response){
        this.specByJudge = response
        this.preloader   = false
      }
       
    });
  }

}  
