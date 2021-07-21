import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../entry.service';

import { CompetenceLandingService } from '../../landing/competence-landing.service';

import { Select2OptionData } from 'ng-select2';
import { Router, ActivatedRoute } from '@angular/router'; 

import Swal from 'sweetalert2'
@Component({
  selector: 'app-entry-list-manager',
  templateUrl: './entry-list-manager.component.html',
  styleUrls: ['./entry-list-manager.component.scss']
})
export class EntryListManagerComponent implements OnInit {

  @Input()  changes : any  = 0;
  @Output() stateChangeBar = new EventEmitter<any>();
  @Output() claimParams = new EventEmitter<any>();
  @Output() previewEntry = new EventEmitter<any>();

  constructor(private service:EntryService,private competenceService : CompetenceLandingService) { }

  
  public statusReloadJudgements : number = 0;

  ngOnInit(): void {  
    this.getEvents();
    this.getEntrys();
  }




  eventsSelect  :   Array<any> = [];
  eventselected :   any='';
  allEntrys     :   Array<any> = [];

  filterSelect: any = '';
  filterQuery: any = '';
  globalEditState : boolean = false;

  currentEdit : any = {};

  // Teams and Categories previusly selected (1st RESULT FROM QUERY)
  TeamsAndCatPrevSel : Array<any> = [];

  AllTeams : Array<Select2OptionData> = [];
  // Todas las categorias registradas en los paneles de este evento
  AllCategories : Array<Select2OptionData> = [];

  openEntryPreview(videoObj:any){
    console.log(videoObj);
    this.previewEntry.emit(videoObj)
  }

  recibeChangebar(stat:any){
    this.stateChangeBar.emit(stat);
  }

  openClaim(val:any){
    console.log(val)
    this.claimParams.emit(val);
  }


  getEvents(){
    this.service.getEvents().then((response:any) => {
     // console.log(response);
      this.eventsSelect = response;

    });
  }

  getEntrys(){
    this.service.getParticipations().then((response:any) => {
     // console.log(response);
      this.allEntrys = response;

    });
  } 

  

  async deleteAnExistantPart(id:number){
    const { value: deletekey } = await Swal.fire({
      title: "ARE YOU SURE?",
      icon: 'warning',
      html:
        '<input placeholder="Write DELETE to confirm" type="text" id="swal-input1" class="swal2-input">',
        
      focusConfirm: false,
      preConfirm: () => {
        return [
           
          document.getElementById('swal-input1'),
         // document.querySelector("input[name='radio2']")
           
        ]
      }
    });  

    if(deletekey){
      let deletekeyinput : any = deletekey[0];
       if (deletekeyinput.value == 'DELETE') {
        this.competenceService.deletePart(id).then((response: any) => {
          Swal.fire({ 
            title: 'Success!',
            text: 'Participation deleted',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
          this.ngOnInit();
          //this.getEntrys();
          //this.getPenalties();
        }).catch((error: any) => {
          Swal.fire({
            title: 'Info!',
            text: 'Error on server',
            icon: 'info',
            showCancelButton: false,
            showConfirmButton: false
          });
        });


         


       }else{
         Swal.fire(`Invalid Delete key`);
       }
      
      




    }
  }

  statuschange(status:number,action:string){
    //this.statusRightBar = status;
   // console.log(this.statusReloadUsers);
    if(action){
      // emit de accion
      if(action == 'reloadJudgements'){
        this.statusReloadJudgements = 1;
      }
    }
  }

}
 