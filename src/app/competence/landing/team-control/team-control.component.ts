import { Component, OnInit, AfterViewInit ,Input, ViewChild} from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { CompetenceLandingService } from '../competence-landing.service';
import Swal from 'sweetalert2';
declare var UIkit: any;

@Component({
  selector: 'app-team-control',
  templateUrl: './team-control.component.html',
  styleUrls: ['./team-control.component.scss']
})
export class TeamControlComponent implements OnInit,AfterViewInit {

  @Input() landingId : number = 0;
  @ViewChild('modalparticipations') modaledition : any;

  constructor(private competenceService : CompetenceLandingService) { }
 
  ngOnInit(): void {
   
    
     
  }
  ngAfterViewInit(): void {
    this.getCategories();
    this.getProfiles();
    this.getParticipations();
  }

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

AviableCategories : Array<Select2OptionData> = [
   


];
currentEdit : any = {};
globalEditState : boolean = false;

  dataForSend : Array<any> = [
    { 
      created_by:1,
      teamId: 0,
      categoryId:0,
      video_url:'',
      aviable:[
          
      ]
    }
  ];
 
  getCategories(){
    this.competenceService.getAllCategories(this.landingId).subscribe((response:any) => {
      //console.log(response);
      this.AllCategories = response;
    });
  }

  getProfiles(){
    this.competenceService.getAllProfiles().subscribe((response:any) => {
      //console.log(response);
      // AllTeams and AtleteProfiles
      this.AllTeams = response;
    });
  }

  getParticipations(){
    this.competenceService.getAllPart(this.landingId).subscribe((response:any) => {
      //console.log(response);
      // AllTeams and AtleteProfiles
      this.TeamsAndCatPrevSel = response;
    });
  }
   
  addteamsForSend(){
    this.dataForSend.push(
      {
        teamId: 0,
        categoryId:0,
        aviable:[

        ]
      });
  }
  changeEvent(event:any){
    //console.log(event);
  }

  // Set Selected From Query
  setSelectedBefore(team:any){
    let selected: Array<any> = [];
    this.TeamsAndCatPrevSel.forEach(element => {
      if(element.team_id == team){
        selected.push(element.category_id);
      }
    });
    return selected;
  }

  setSelected(team:any){
    let selected : Array<any> = this.setSelectedBefore(team);
    //selected;
    this.dataForSend.forEach(function(a:any,i:any){
      if(a.teamId == team){
        selected.push(a.categoryId);
      }

    });
    return selected;
  }

  setAviable(index:any,team:any){
    let aviable  : Array<any>  = []; 
    let selected : Array<any>  = this.setSelected(team);
    let vm = this;
    vm.AllCategories.forEach(function(a:any,i:any){
      if(selected.includes(a.id)){

      }else{
        aviable.push(a);
      }

      vm.dataForSend[index].aviable = aviable;


    });

  }
  
 
 
  setCurrentEdit(i:number,team:any){
    if(this.checkIfEditState()){
       let self = this;
    this.currentEdit =  this.TeamsAndCatPrevSel[i];
    this.currentEdit.aviable =  [];
    this.globalEditState = true;
    this.TeamsAndCatPrevSel[i].editStatus = true;
    let aviable  : Array<any>  = []; 
    let selected : Array<any>  = this.setSelected(team);
    self.AllCategories.forEach(function(a:any,iss:any){
      if(self.TeamsAndCatPrevSel[i].category_id == a.id){
        aviable.push(a);
      }
      if(selected.includes(a.id)){

      }else{
        aviable.push(a);
      } 
       
      
    });
    //console.log(team);
      self.currentEdit.aviable = aviable;
    }
   
  }


  changeEditStatus(i:number,action:boolean){
    
      this.TeamsAndCatPrevSel[i].editStatus = action;
    this.globalEditState = action;
    
    
  }
  checkIfEditState(): boolean{
    if(this.globalEditState){
      Swal.fire({
      title: 'Info!',
      text: 'FINISH OR CANCEL THE ACTIVE EDITION',
      icon: 'info',
      showCancelButton: false,
      showConfirmButton: false
    });
    return false
    }
    return true
  }

  validateArray() : any{
    
    let rett = true;
    
    this.dataForSend.forEach(function(a:any,i:any) : any{
      if(a.teamId == 0  || a.teamId == null || a.categoryId == 0 || a.categoryId == null){
        Swal.fire({
          title: 'Info!',
          text: 'ALL THE TEAMS AND CATEGORIES MUST BE SELECTED',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false
        });
        rett =  false;
      }
    });
    return rett;
  }
 
  sendPart(){
    if(this.checkIfEditState()){
       if(this.validateArray()){
      // aqui se hace el post
        let obj = { 
          event_id : this.landingId,
          conected_user : 0,
          data          :this.dataForSend
        }
      this.competenceService.sendParts(JSON.stringify(obj)).then( (response: any) => {
        if(response){
          Swal.fire({
            title: 'Success!',
            text: 'Participations saved',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
           
          this.dataForSend = [
            {
              teamId: 0,
              categoryId:0,
              aviable:[
      
              ]
            }
          ];
          this.ngAfterViewInit();
        }
      }).catch((error: any) => {
        console.log(error); 
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

        
    }
    }
  }

  editPart(){
     
    let obj = 
    {
      
      'event_id' : this.landingId,
      "conected_user":1,
      "data":[
        {
          "id":this.currentEdit.id,
          "teamId":this.currentEdit.team_id,
          "categoryId":this.currentEdit.category_id,
          "video_url":this.currentEdit.video_url
        },
      ],};
      
       // let obj = this.currentEdit;
      this.competenceService.updatePart(obj).then( (response: any) => {
        if(response){
          Swal.fire({
            title: 'Success!',
            text: 'Participations saved',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
          });
           
          this.dataForSend = [
            {
              teamId: 0,
              categoryId:0,
              aviable:[
      
              ]
            }
          ];
          this.ngAfterViewInit();
        }
      }).catch((error: any) => {
        console.log(error); 
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

        
   
     
  }

  deleteForsend(i:number){
    if(this.checkIfEditState()){
      this.dataForSend.splice(i,1);
    }
    
  }

  recalculeAviables(){
    this.dataForSend.forEach(function(a:any,i:any){
      console.log(a);
    })
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
          this.ngAfterViewInit();
          this.recalculeAviables();
          
         
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



  /****LO TOCO CHUCHO***/
  openModalCute(){
    let modalElement = this.modaledition.nativeElement;
    UIkit.modal(modalElement).show();
  }
  /****LO TOCO CHUCHO***/

}
