import { Component, OnInit, OnChanges, ViewChild, Input, Output, EventEmitter  } from '@angular/core';
import { ParamsService } from '../params.service';
import { generateRandomString } from 'src/app/shared/enviroment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parameter-creator',
  templateUrl: './parameter-creator.component.html',
  styleUrls: ['./parameter-creator.component.scss']
})
export class ParameterCreatorComponent implements OnInit, OnChanges {

  constructor(private service: ParamsService) { }

  public paramTitle : string = '';
  public paramDesc  : string = '';
  public criterias  : any[] = [];

  @Output() eventFinishCreate = new EventEmitter<any>();

  ngOnInit(): void {
    this.criterias.push(
      {title: '', points: '',
      serial:generateRandomString(15)}
    );
  }

  ngOnChanges(){
    this.criterias.push(
      {title: '', points: ''}
    );
    console.log(this.paramTitle);
  }
  cancel(){
    this.eventFinishCreate.emit();
  }

  addCriteria(){
    let a = {
      title:'',
      points: 0,
      serial:generateRandomString(15)
    };
    this.criterias.push(a);
  }
  
  spliceParaCrear(index: any){
    this.criterias.splice(index, 1);
  }

  sendForm(){
    if(this.paramTitle != '' && this.paramDesc != ''){
        this.service
            .sendParams(this.paramTitle, this.paramDesc, this.criterias)
            .then( (response: any) => {
              if(response){
                Swal.fire({
                  title: 'Success!',
                  text: '',
                  icon: 'success',
                  showCancelButton: false,
                  showConfirmButton: false
                });
                this.paramTitle = '';
                this.paramDesc = '';
                this.criterias = [];
                this.eventFinishCreate.emit();
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
