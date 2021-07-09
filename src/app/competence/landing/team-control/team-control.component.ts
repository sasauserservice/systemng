import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-team-control',
  templateUrl: './team-control.component.html',
  styleUrls: ['./team-control.component.scss']
})
export class TeamControlComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
     
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
    console.log(event);
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
      if(parseInt(a.teamId) == parseInt(team)){
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
  
  validateArray() : any{
    console.log(this.dataForSend);
    this.dataForSend.forEach(function(a:any,i:any) : any{
       
      
      if(a.teamId == 0  || a.teamId == null || a.categoryId == 0 || a.categoryId == null){
        Swal.fire({
          title: 'Info!',
          text: 'ALL THE TEAMS AND CATEGORIES MUST BE SELECTED',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false
        });
        return false;
      }
    });
     

  }
 

  setCurrentEdit(i:number,team:any){
    let self = this;
    this.currentEdit =  this.TeamsAndCatPrevSel[i];
    this.currentEdit.aviable =  [];
    this.TeamsAndCatPrevSel[i].editStatus = true;
    let aviable  : Array<any>  = []; 
    let selected : Array<any>  = this.setSelected(team);
    self.AllCategories.forEach(function(a:any,i:any){
      if(selected.includes(a.id)){

      }else{
        aviable.push(a);
      } 
      self.currentEdit.aviable = aviable;
    });
  }

  changeEditStatus(i:number,action:boolean){
    this.TeamsAndCatPrevSel[i].editStatus = action;
  }


  sendPart(){
    if(this.validateArray()){
      // aqui se hace el post
      Swal.fire({
        title: 'Info!',
        text: 'all right',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false
      });
    }
    
  }

  deleteForsend(i:number){
    this.dataForSend.splice(i,1);
  }

}
