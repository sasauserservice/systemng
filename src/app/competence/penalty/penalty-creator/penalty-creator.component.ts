import { Component, OnInit, ViewChild,Output, EventEmitter } from '@angular/core';
import { PenaltiesService } from '../penalties.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-penalty-creator',
  templateUrl: './penalty-creator.component.html',
  styleUrls: ['./penalty-creator.component.scss']
})
export class PenaltyCreatorComponent implements OnInit {
  
  @Output() eventFinishCreate = new EventEmitter<any>();

  constructor(private service: PenaltiesService) { }

  ngOnInit(): void {
  }

  public penalties : Array<any> = [{
        title:'',
        json:{},
        points:0
      },
    ];

  addPenalty(){
    this.penalties.push({
      title:'',
      json:{},
      points:0
    })
  } 

  cancel(){
    this.eventFinishCreate.emit();
  }

  sendPenalties(){
    if(this.penalties[0].title != '' && this.penalties[0].desc != '' && this.penalties[0].points != 0){
      this.service.sendParams(this.penalties).then( (response: any) => {
              if(response){
                Swal.fire({
                  title: 'Success!',
                  text: 'Penalties saved',
                  icon: 'success',
                  showCancelButton: false,
                  showConfirmButton: false
                });
                this.eventFinishCreate.emit();
                this.penalties = [];
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
        text: 'Title, points and description required',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
      
    }
    
      
    }

}
