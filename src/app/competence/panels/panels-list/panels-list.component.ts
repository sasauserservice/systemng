import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { PanelService } from '../panel.service';
declare var UIkit: any;
@Component({
  selector: 'app-panels-list',
  templateUrl: './panels-list.component.html',
  styleUrls: ['./panels-list.component.scss']
})
export class PanelsListComponent implements OnInit {

  @Input()  changes : any = 0;
  @Output() stateChange = new EventEmitter<any>();
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() currentEdit = new EventEmitter<any>();

  panels : Array<any> = [];

  constructor(private PanelService: PanelService, private meta : Meta) {
    this.addMeta();
  }

  ngOnInit(): void {
    this.list();
  }

  ngOnChanges(){
    
    if(this.changes == 1){
      this.list(); 
      this.stateChange.emit(0);
    }
    
  }

  new(){
    this.stateChangeBar.emit(7);
  } 

  edit(item: any){
    this.stateChangeBar.emit(8);
    this.currentEdit.emit(item);
  }

  list(){
    this.PanelService
    .getPanels()
    .then( (response: any) => {
      console.log(response);
      this.panels = response;
    } )
    .catch( (error: any) => {
      console.error(error);
    } );
  }

  async delPanel(id:number){
    const { value: deletekey } = await Swal.fire({
      title: "ARE YOU SURE?",
      icon: 'warning',
      html: '<input placeholder="Write DELETE to confirm" type="text" id="swal-input1" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1')
        ]
      }
    });
    if(deletekey){
      let deletekeyinput : any = deletekey[0];
       if (deletekeyinput.value == 'DELETE') {
        this.PanelService.delpanel(id).then((response: any)=>{
          if(response){
            Swal.fire({
              title: 'OK!',
              text: 'Panel deleted!',
              icon: 'success',
              showCancelButton: false,
              showConfirmButton: false
            });
            this.list();
          }
        }).catch((error:any) => {
          if(error){
            Swal.fire(`Error on server`);
          }
        });
       }else{
         Swal.fire(`Invalid Delete key`);
       }
    }
  }

  addMeta(){
    this.meta.addTags([
      {name: 'author', content: 'SASA SOCIAL'},
      {name: 'description', content: 'PANEL ADMINISTRATIVO DE MATCH'},
    ]);
  }

}
