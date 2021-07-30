import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ParamsService } from '../params.service';
import { generateRandomString } from 'src/app/shared/enviroment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-parameter-edit',
  templateUrl: './parameter-edit.component.html',
  styleUrls: ['./parameter-edit.component.scss']
})
export class ParameterEditComponent implements OnInit {

  @Input() editObjet : any = {};
  @Output() eventFinishEdit = new EventEmitter<any>();

  constructor(private service : ParamsService) { }

  ngOnInit(): void {
  }

  pushParaEdit(){
    this.editObjet.criteria.push({
      title: '',
      points: 0,
      serial:generateRandomString(15)
    });
  }
  
  spliceParaEdit(index: any){
    this.editObjet.criteria.splice(index, 1);
  }


  update(){
    if(this.editObjet.title != ''){
      this.service
          .update(this.editObjet)
          .then( (response: any) => {
            if(response){
              Swal.fire({
                title: 'Success!',
                text: 'Parameter updated',
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
        text: 'Title and description required',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    }
    
  }

}
