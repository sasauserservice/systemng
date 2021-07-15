import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { PanelService } from '../panel.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-panels-edit',
  templateUrl: './panels-edit.component.html',
  styleUrls: ['./panels-edit.component.scss']
})
export class PanelsEditComponent implements OnInit, OnChanges {

  @Input()  editObjet : any = {};
  @Output() eventFinishEdit = new EventEmitter<any>();


  firstTime :boolean = true;

  data : Array<Select2OptionData> = [];
  judges : Array<Select2OptionData> = [];
  categories : Array<Select2OptionData> = [];
  penalties : Array<Select2OptionData> = [];
  panelname : string = '';
  eventselect: any = '';
  judgeselect: any = '';
  judgesGeneralelect: any = [];
  judgesPenaltyselect: any = [];
  judgesCategoriesselect: any = [];

  slotsToGeneral : any = [];
  slotsToPenalty : any = [];

  paramentersAll : any = [];
  paramentersAllIds : any = [];
  paramentersAviable : any = [];
  paramentersSelected : any = [];
  
  penaltiesAll : any = [];
  penaltiesAviable : any = [];
  penaltiesSelected : any = [];




  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    let self = this;

    self.slotsToGeneral = [];
    self.slotsToPenalty = [];

    self.paramentersAll = [];
    self.paramentersAviable = [];
    self.paramentersSelected = [];

    self.penaltiesAll = [];
    self.penaltiesSelected = [];

    

    
    this.panelService.getMatchToSelect2().then(function(response: any){
      self.data = response;
    }).catch(function(error: any){
      console.log(error);
    });
    
    this.panelService.getJudgesToSelect2().then(function(response: any){
      self.judges = response;
    }).catch(function(error: any){
      console.log(error);
    });
    
    this.panelService.getCategoriesToSelect2().then((response: any) => {
      self.categories = response;
      //Set categories selected
      this.judgesCategoriesselect = this.editObjet.toedit.selectedCategories;
      /*this.editObjet.categories.forEach((category:any, idex: any) => {
        this.judgesCategoriesselect.push(category.id);
      });*/
    
    }).catch(function(error: any){
      console.log(error);
    });

    this.slotsToGeneral = this.editObjet.toedit.selectedJudgeGeneral;
    this.paramentersAll = this.editObjet.toedit.allparameters; 
    this.paramentersSelected = this.editObjet.toedit.selectedParameters; 
    this.generateAvaliable();
    this.setAlljustIds();

    

    this.slotsToPenalty    = this.editObjet.toedit.selectedJudgePenalties;
    this.penaltiesSelected = this.editObjet.toedit.selectedPenalties;
    this.penaltiesAll      = this.editObjet.toedit.allpenalties;
    this.generateAvaliablePenalties();


    
    /*this.panelService.getPenaltiesToselect().then((response: any) => {
      this.penaltiesAll = response; 

      //Set Penalty judge
      this.editObjet.judges.penalty.forEach((judge:any) => {
        this.slotsToPenalty.push({
          user: judge.user.email,
          email: '',
          penalties: judge.user.params,
        });
        if(judge.user.params.length == 0){
          this.generateAvaliablePenalties();
        }else{
          judge.user.params.forEach( (param: any) => {
          this.penaltiesSelected.push(param.id);
          setTimeout(()=>{
            this.generateAvaliablePenalties();
            
          }, 1000);
        } );
        }     
      });
    }).catch((error: any) => {
      console.log(error);
    });*/

    

    //Set main judge
    this.judgeselect = this.editObjet.judges.main[0].user.email;
    
    
  }

  ngOnChanges(){
    this.ngOnInit();
  }

  addNewSlot(type: number){
    if(type === 0){
      this.slotsToGeneral.push({
        user: '',
        email: '',
        params: [],
      });
    } else {
      this.slotsToPenalty.push({
        user: 0,
        email: '',
        penalties: [],
      });
    }
  }

  eraseSlot(type: number, index: number){
    if(type === 0){

      this.slotsToGeneral[index].params.forEach((element:any) => {
       
        let peselectedindex = this.paramentersSelected.indexOf(element.id);
 

        this.paramentersSelected.splice(peselectedindex,1);
        this.generateAvaliable();
      });

      this.slotsToGeneral.splice(index, 1);
      
    } else {

      
      this.slotsToPenalty[index].penalties.forEach((element:any) => {
       
        let peselectedindex = this.penaltiesSelected.indexOf(element.id);
 

        this.penaltiesSelected.splice(peselectedindex,1);
        this.generateAvaliablePenalties();
      });


      this.slotsToPenalty.splice(index, 1);
    }
  }

  sendCreate() : any {
    if(this.editObjet.name.trim() == ''){
      Swal.fire({
        title: 'Info!',
        text: 'You must write a panel name',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });

      return false;
    }

    let dataF = {
      title: this.panelname,
      event: this.eventselect || null,
      mainjudge: this.judgeselect,
      generaljudge: this.slotsToGeneral,
      penaltyjudge: this.slotsToPenalty,
      categories: this.judgesCategoriesselect,
      objectEdit: this.editObjet,
    };

    this.panelService
    .updatePanel(dataF)
    .then((response: any) => {
      Swal.fire({
        title: 'OK!',
        text: 'Panel update!',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false
      });
      this.eventFinishEdit.emit();
    })
    .catch((error: any) => {
      Swal.fire({
        title: 'Info!',
        text: 'Error on server',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      });
    });
  }

 

 

  setAlljustIds(){
    this.paramentersAllIds = [];
    this.paramentersAll.forEach((element:any) => {
      this.paramentersAllIds.push(element.id);     
    });
  }
  // comprobar que los seleccionados si esten  en los All 
  procesParametersByCategory(){
    let slotsflag = 0;
    let paramslotsflag = 0;
    this.slotsToGeneral.forEach((slot:any,slotindex:any) => {
      slotsflag ++;
      paramslotsflag = 0;
      slot.params.forEach((slotpatam:any,slotpatamindex:any) => {
        paramslotsflag ++;
        //console.log(slotpatam.id);
        if(this.paramentersAllIds.includes(slotpatam.id)){

        }else{
          this.slotsToGeneral[slotindex].params.splice(slotpatamindex,1);
          let indexparaselected = this.paramentersSelected.indexOf(slotpatam.id);
          this.paramentersSelected.splice(indexparaselected,1);
        }
       
      });
        
        
          if(paramslotsflag == slot.params.length || slotsflag == this.slotsToGeneral.length){
            this.generateAvaliable();
            //alert('es hoy');
          }
         
        
    });
  }


  whenCategoriesSelected($event: any){
     
    
    if($event.length != 0){
      this.panelService.getParamsToselect($event)
      .then((response: any) => {
        console.log(response);
        this.paramentersAll = response || [];
        this.setAlljustIds();
        this.procesParametersByCategory();
        //this.slotsToGeneral = [];
        //Set General judge
        /*this.editObjet.judges.general.forEach((judge:any) => {
          this.slotsToGeneral.push({
            user: judge.user.email,
            email: '',
            params: judge.user.params,
          });

          if( judge.user.params.length == 0 ){
            this.generateAvaliable();
          }else{
            judge.user.params.forEach( (param: any) => {
              this.paramentersSelected.push(param.id);
            } );

            this.generateAvaliable();
          }
        });*/
      })
      .catch((error: any) => {
        console.log(error);
      });
    }else{
      if(this.firstTime){
        //this.paramentersAll =  [];
        this.firstTime = false;
      }else{
        this.paramentersAll =  [];
      }
      
      this.setAlljustIds();
      this.procesParametersByCategory();
    }
  }

  onChangeSelectsParams(element : any, target: any){
    console.log(this.paramentersSelected);
    if(element.target.checked){
      target.push({
        id: element.target.value,
        title: element.target.dataset.label,
      });
      this.paramentersSelected.push(element.target.value);
    }else{
      let index = target.findIndex((rank:any) => rank === element.target.value);
      let index2 = this.paramentersSelected.findIndex((rank:any) => rank === element.target.value);
      target.splice(index, 1);       
      this.paramentersSelected.splice(index2, 1);       
    }
    
    this.generateAvaliable();
  }

  generateAvaliable(){
     
    this.paramentersAviable = [];
    if(this.paramentersAll.length > 0){
      this.paramentersAll.forEach((a:any,b:any) => {
        if( this.paramentersSelected.includes(a.id) ){

        } else {
          this.paramentersAviable.push(a);
          console.log(a.id);
        }
      });
    } else {
      this.restoreSelectionsGeneral();
    }

  }
  
  /**PENALTIES**/

  whenJudgePenalSelected($event: any){
    if($event){
      let selecciones = $event;
      this.slotsToPenalty = [];
      selecciones.forEach((a: any, b: any) => {
        this.slotsToPenalty.push({
          id: a,
          penalties: []
        });
      });
      /**/
      this.panelService.getPenaltiesToselect()
      .then((response: any) => {
        this.penaltiesAll = response;
      })
      .catch((error: any) => {
        console.log(error);
      });
      setTimeout(() => {
        this.generateAvaliablePenalties();
      }, 500);
    }
  }
  
  generateAvaliablePenalties(){
    if( this.penaltiesAll.length > 0){
      this.penaltiesAviable = [];
      this.penaltiesAll.forEach((a:any,b:any) => {
        if( this.penaltiesSelected.includes(a.id) ){

        } else {
          this.penaltiesAviable.push(a);
        }
      });
    } else {
      this.restoreSelectionsPenalty();
    }
  }

 



  onChangeSelectsPenalties(element : any, target: any){
    
    if(element.target.checked){
      target.push({
        id: element.target.value,
        text: element.target.dataset.label,
      });
      this.penaltiesSelected.push(element.target.value);
    }else{
      let index = target.findIndex((rank:any) => rank === element.target.value);
      let index2 = this.penaltiesSelected.findIndex((rank:any) => rank === element.target.value);
      target.splice(index, 1);       
      this.penaltiesSelected.splice(index2, 1);       
    }

    this.generateAvaliablePenalties();
  }

  restoreSelectionsGeneral(){
    this.paramentersAll = [];
    this.paramentersAviable = [];
    //this.paramentersSelected = [];
  }
   
  restoreSelectionsPenalty(){
    this.penaltiesAll = [];
    //this.penaltiesAviable = [];
    this.penaltiesSelected = [];
  }

}
