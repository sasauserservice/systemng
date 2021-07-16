import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PanelService } from '../../panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events-to-panels',
  templateUrl: './events-to-panels.component.html',
  styleUrls: ['./events-to-panels.component.scss']
})
export class EventsToPanelsComponent implements OnInit {

  stateloading : boolean = false;

  eventsAll : any = [];

  eventSelected : any = '0';

  panelsAll : any = [];

  paramentersSelected : any = [];

  paramentersToSend : any = [];

  paramentersAviable : any = [];

  searchAviable: string = '';

  responseOnSend : boolean = false;

  @Output() eventFinishEdit = new EventEmitter<any>();

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.getevents();
  }

  async getPanelsAviables($event:any){
    this.stateloading = false;
    let response = await this.panelService.getPanelsNotAssiged($event);
    this.panelsAll = response.all;
    this.paramentersToSend = response.asignados;
    this.paramentersSelected = response.asignadosId;
    this.generateAvaliable();
    this.stateloading = true;
  }

  async getevents(){
    this.eventsAll = await this.panelService.getEvents();
    this.stateloading = true;
  }

  async send() {

    if(this.eventSelected == '0' || this.eventSelected == null){
      Swal.fire({
        title: 'Info!',
        text: 'You must selected a event',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });

      return;
    }

    this.responseOnSend = false;
    this.panelService.setpanelsToEvent(this.paramentersToSend, this.eventSelected).then((resp: any)=>{
      Swal.fire({
        title: 'OK!',
        text: 'Panel update!',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false
      });
      this.eventFinishEdit.emit();
    }).catch((error: any)=>{
      Swal.fire({
        title: 'KO!',
        text: 'Error server!',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    });
  }

  onChangeSelectsParams(element : any){
    console.log(element);
    if(element.target.checked){
      this.paramentersToSend.push({
        id: element.target.value,
        text: element.target.dataset.label,
      });
      this.paramentersSelected.push(element.target.value);
    }else{
      let index = this.paramentersToSend.findIndex((rank:any) => rank.id === element.target.value);
      let index2 = this.paramentersSelected.findIndex((rank:any) => rank === element.target.value);
      this.paramentersToSend.splice(index, 1);       
      this.paramentersSelected.splice(index2, 1);       
    }
    this.generateAvaliable();
  }

  whenChangeEvent($event:any){
    if($event != null){
      this.getPanelsAviables($event);
    } else {
      this.generateAvaliable();
    }
  }

  generateAvaliable(){
     
    this.paramentersAviable = [];
    if(this.panelsAll.length > 0){
      this.panelsAll.forEach((a:any,b:any) => {
        if( this.paramentersSelected.includes(a.id) ){

        } else {
          this.paramentersAviable.push(a);
        }
      });
    }

  }


}
