import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { PenaltiesService } from '../penalties.service';
import Swal from 'sweetalert2';
declare var UIkit: any;
@Component({
  selector: 'app-penalty-edit',
  templateUrl: './penalty-edit.component.html',
  styleUrls: ['./penalty-edit.component.scss']
})
export class PenaltyEditComponent implements OnInit {

  @Input()  editObjet : any = {};
  @Output() eventFinishEdit = new EventEmitter<any>();

  constructor(private service: PenaltiesService) { }

  ngOnInit(): void {
  }

  
  update(){
    if(this.editObjet.title != '' && this.editObjet.desc != '' && this.editObjet.points != 0){
      this.service
          .update(this.editObjet)
          .then( (response: any) => {
            if(response){
              Swal.fire({
                title: 'Success!',
                text: 'You must write a term to search',
                icon: 'success',
                showCancelButton: false,
                showConfirmButton: false
              });
              
              this.eventFinishEdit.emit();
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
