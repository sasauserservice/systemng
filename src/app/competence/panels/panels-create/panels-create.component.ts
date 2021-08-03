import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Select2OptionData } from 'ng-select2'
import { PanelService } from '../panel.service'
import { generateRandomString } from 'src/app/shared/enviroment'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-panels-create',
  templateUrl: './panels-create.component.html',
  styleUrls: ['./panels-create.component.scss']
})
export class PanelsCreateComponent implements OnInit {

  data : Array<Select2OptionData> = []
  judges : Array<Select2OptionData> = []
  juesesparaselects : Array<Select2OptionData> = []
  categories : Array<Select2OptionData> = []
  penalties : Array<Select2OptionData> = []
  panelname : string = ''
  eventselect: any = ''
  judgeselect: any = ''
  judgesGeneralelect: any = []
  judgesPenaltyselect: any = []
  judgesCategoriesselect: any = []

  slotsToGeneral : any = []
  slotsToPenalty : any = []

  paramentersAll : any = []
  paramentersAviable : any = []
  paramentersSelected : any = []

  penaltiesAll : any = []
  penaltiesAviable : any = []
  penaltiesSelected : any = []

  @Output() eventFinishCreate = new EventEmitter<any>()

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    let self = this

    this.panelService.getMatchToSelect2().then(function(response: any){
      self.data = response
    }).catch(function(error: any){
      console.log(error)
    })

    this.panelService.getJudgesToSelect2().then(function(response: any){
      self.judges = response
      self.juesesparaselects = response
    }).catch(function(error: any){
      console.log(error)
    })

    this.panelService.getCategoriesToSelect2().then(function(response: any){
      self.categories = response
    }).catch(function(error: any){
      console.log(error)
    })

    //setTimeout(()=>{
      this.generateAvaliable()
      
      this.addNewSlot(0)
      this.addNewSlot(1)
    //}, 500)


    this.panelService.getPenaltiesToselect()
      .then((response: any) => {
        this.penaltiesAll = response
        this.generateAvaliablePenalties()
      })
      .catch((error: any) => {
        console.log(error)
      })
  }


  comprobeSlotsNotEmpty():boolean{
    let a = 1;
    let returno = true;
    this.slotsToGeneral.forEach((a:any)=>{
      if(a.params.length == 0){
        returno = false;
      }
    });
    return returno;
  }

  comprobeCategoryNotEmpty():boolean{
    let a = 1;
    let returno = true;
    if(this.judgesCategoriesselect.length == 0){
      returno = false
    }
    return returno;
  }



  addNewSlot(type: number){
    if(type === 0){
      this.slotsToGeneral.push({
        user: '',
        email: '',
        params: [],
        id:generateRandomString(15)
      })
    } else {
      this.slotsToPenalty.push({
        user: 0,
        email: '',
        penalties: [],
        id:generateRandomString(15)
      })
    }
  }

  eraseSlot(type: number, index: number){
    if(type === 0){
      this.slotsToGeneral.splice(index, 1)
    } else {
      this.slotsToPenalty.splice(index, 1)
    }
  }
  
  sendCreate() : any {
    let catValidation = this.comprobeCategoryNotEmpty()
    let slotsVAlidation = this.comprobeSlotsNotEmpty()

    if(!slotsVAlidation){
      Swal.fire({
        title: 'Info!',
        text: 'Slots cant be empty',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      })
      return false
    }

    if(!catValidation){
      Swal.fire({
        title: 'Info!',
        text: 'Categories are mandatory',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      })
      return false
    }
    if(this.panelname.trim() == ''){
      Swal.fire({
        title: 'Info!',
        text: 'You must write a panel name',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false
      })

      return false
    }

    let dataF = {
      title: this.panelname,
      event: this.eventselect || null,
      mainjudge: this.judgeselect,
      generaljudge: this.slotsToGeneral,
      penaltyjudge: this.slotsToPenalty,
      categories: this.judgesCategoriesselect,
    }

    console.log(dataF)

    this.panelService.postPanel(dataF).then((response: any) => {
      Swal.fire({
        title: 'OK!',
        text: 'Panel created!',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false
      })
      this.eventFinishCreate.emit()
    }).catch((error) => {
      if(error){
        if(error.status == 403){
          Swal.fire({
            title: 'CATEGORY',
            text: 'Categories cant be duplicated on the event, please remove duplicated category from this panel, or edit the container panel on the target event.',
            icon: 'error',
            showCancelButton: false,
            showConfirmButton: false
          })
        }else{
          Swal.fire({
          title: 'Info!',
          text: 'Error on server',
          icon: 'info',
          showCancelButton: false,
          showConfirmButton: false
        })
        }
      }
      
    })
  }

  whenChangeGeneralJudge($event: any){
    console.log($event)
    if($event){
      let selecciones = $event
      this.slotsToGeneral = []
      selecciones.forEach((a: any, b: any) => {
        this.slotsToGeneral.push({
          id: a,
          params: []
        })
      })
    }

    setTimeout(()=>{
      this.generateAvaliable()
    }, 500)
  }

  whenCategoriesSelected($event: any){
    if($event){
      this.panelService.getParamsToselect($event)
      .then((response: any) => {
        this.paramentersAll = response || []
        this.generateAvaliable()
      })
      .catch((error: any) => {
        console.log(error)
      })
    }
    setTimeout(()=>{
      this.generateAvaliable()
    }, 500)
  }

  onChangeSelectsParams(element : any, target: any){
    console.log(element)
    console.log(target)
    if(element.target.checked){
      target.push({
        id: element.target.value,
        title: element.target.dataset.label,
      })
      this.paramentersSelected.push(element.target.value)
    }else{
      let index = target.findIndex((rank:any) => rank.id === element.target.value)
      let index2 = this.paramentersSelected.findIndex((rank:any) => rank === element.target.value)
      target.splice(index, 1)
      this.paramentersSelected.splice(index2, 1)
    }

    this.generateAvaliable()
  }

  generateAvaliable(){
    this.paramentersAviable = []
    if(this.paramentersAll.length > 0){
      this.paramentersAll.forEach((a:any,b:any) => {
        if( this.paramentersSelected.includes(a.id) ){

        } else {
          this.paramentersAviable.push(a)
        }
      })
    } else {
      this.restoreSelectionsGeneral()
    }

  }

  /**PENALTIES**/

  whenJudgePenalSelected($event: any){
    if($event){
      let selecciones = $event
      this.slotsToPenalty = []
      selecciones.forEach((a: any, b: any) => {
        this.slotsToPenalty.push({
          id: a,
          penalties: []
        })
      })
      /**/
      this.panelService.getPenaltiesToselect()
      .then((response: any) => {
        this.penaltiesAll = response
        this.generateAvaliablePenalties()
      })
      .catch((error: any) => {
        console.log(error)
      })
       
        
      
    }
  }

  generateAvaliablePenalties(){
    if( this.penaltiesAll.length > 0){
      this.penaltiesAviable = []
      this.penaltiesAll.forEach((a:any,b:any) => {
        if( this.penaltiesSelected.includes(a.id) ){

        } else {
          this.penaltiesAviable.push(a)
        }
      })
    } else {
      this.restoreSelectionsPenalty()
    }
  }

  onChangeSelectsPenalties(element : any, target: any){
    if(element.target.checked){
      target.push({
        id: element.target.value,
        text: element.target.dataset.label,
      })
      this.penaltiesSelected.push(element.target.value)
    }else{
      let index = target.findIndex((rank:any) => rank.id === element.target.value)
      let index2 = this.penaltiesSelected.findIndex((rank:any) => rank === element.target.value)
      target.splice(index, 1)
      this.penaltiesSelected.splice(index2, 1)
    }

    this.generateAvaliablePenalties()
  }

  restoreSelectionsGeneral(){
    this.paramentersAll = []
    this.paramentersAviable = []
    this.paramentersSelected = []
  }

  restoreSelectionsPenalty(){
    this.penaltiesAll = []
    this.penaltiesAviable = []
    this.penaltiesSelected = []
  }
}
