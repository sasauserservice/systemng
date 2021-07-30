import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { CompetitorService } from '../competitor.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-competitor-edit-manager',
  templateUrl: './competitor-edit-manager.component.html',
  styleUrls: ['./competitor-edit-manager.component.scss']
})
export class CompetitorEditManagerComponent implements OnInit {

  @Input()  editObjet : any = {};
  @Output() eventFinishEdit = new EventEmitter<any>();

  constructor(private service: CompetitorService) { }

  ngOnInit(): void {
    this.getCoaches();
    this.coachforSend = this.editObjet.manager;
  }

   
  coachList: Array<any> = [];
  coachforSend: Array<any> = [0,];

  getCoaches(){
    this.service.getCoach().subscribe((response:any) => {
      //console.log(response);
      this.coachList = response;
    });
  }
  

  deleteCoach(index:number){
    this.coachforSend.splice(index,1)
  }

  ngOnChanges(){
    this.coachforSend = this.editObjet.manager;
  }

  addCoachForsend(){
    this.coachforSend.push(0);
  }

  sendParticipant(){
    let obj:any = {
      "id":this.editObjet.id,
      "managers": this.coachforSend,
      "type": this.editObjet.type, //este es 1 atleta y 2 team
      "data": this.editObjet.data
    };

    if(this.coachforSend.includes(0) || this.editObjet.data.name == '' ){
      Swal.fire({
        title: 'Info!',
        text: 'Not empty values',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    }else{
      this.service.updateCoptetitor(obj).then( (response: any) => {
        if(response){ 
          Swal.fire({
            title: 'Success!',
            text: 'Competitor saved',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.eventFinishEdit.emit();
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
