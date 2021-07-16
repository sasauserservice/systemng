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

  constructor(private service:EntryService,private competenceService : CompetenceLandingService) { }

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
  TeamsAndCatPrevSel : Array<any> = [
    {
      id:1,
      team_id:'4',
      team_title: 'Jaguars',
      category_id:'8',
      category_title: 'Dancing 2X120',
      video_url:'https://www.youtube.com/watch?v=iJxbkN4hvqU'
    },
    {
      id:2, 
      team_id:'4',
      team_title: 'Jaguars',
      category_id:'9',
      category_title: 'Scholastic Cheerleaders',
      video_url:''
    },
    {
      id:3, 
      team_id:'12',
      team_title: 'Gorilas',
      category_id:'1',
      category_title: 'Recreation Cheerleaders',
      video_url:'https://www.youtube.com/watch?v=BlQ2mP2EE4A'
    },
  ];

  AllTeams : Array<Select2OptionData> = [
    {
    id:'4',
    text: 'Jaguars'
  }, 
  {
    id:'5',
    text: 'Lions'
  },
  {
    id:'8',
    text: 'Angry Birds'
  },
  {
    id:'9',
    text: 'Zeebras'
  },
  {
    id:'1',
    text: 'Monkeys'
  },
  {
    id:'12',
    text: 'Gorilas'
  }


];
  // Todas las categorias registradas en los paneles de este evento
  AllCategories : Array<Select2OptionData> = [
    {
    id:'4',
    text: 'Jumping 1X20'
  },
  {
    id:'5',
    text: 'Jumping 2X120'
  },
  {
    id:'8',
    text: 'Dancing 2X120'
  },
  {
    id:'9',
    text: 'Scholastic Cheerleaders'
  },
  {
    id:'1',
    text: 'Recreation Cheerleaders'
  },
  {
    id:'12',
    text: 'Pro Cheerleaders'
  }


];







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

}
 