import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  public statusRightBar        : number = 0;
  public statusBodyMain            : number = 0;
  public statusReloadParams    : number = 0;
  public statusReloadPenalties : number = 0;
  public statusReloadCategories : number = 0;
  public statusReloadPanels : number = 0;
  public statusReloadEvents : number = 0;
  public statusReloadUsers : number = 0;
  public statusReloadCompetitors : number = 0;
  public statusReloadJudgements : number = 0;
  public statusReloadGrandCategories : number = 0;
  public currentEdition         : any    = {};
         statusPreviewEntry     : boolean    = false
         previewEntryData       : any    = {}
  @Output() reloadParameters = new EventEmitter<any>();

  fruit : string = '';
  data : Array<Select2OptionData> = [];

  constructor(private Contentserv: ContentService, private route: Router) { }

  ngOnInit(): void {
    let self = this;
    this.Contentserv.getMatchToSelect2().then(function(response: any){
      self.data = response;
    }).catch(function(error: any){
      console.log(error);
    });
  }

  OpenEntryPreviewer(obj:any){
    if(this.statusPreviewEntry){
      this.statusPreviewEntry = false;
    }
     
    let self = this;
    setTimeout(function(){
      self.previewEntryData = obj;
      self.statusPreviewEntry = true
      },500)
  }

  async createPost(){
    const { value: titleArticle } = await Swal.fire({
      title: "Let's create a new Match",
      html:
        '<input placeholder="title" type="text" id="swal-input1" class="swal2-input">' +
        '<div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">'+
            '<label><input id="radio1" value="1" class="uk-radio elementoTypeLanding" type="radio" name="radio2" checked="checked"> PRECENSIAL</label>'+
            '<label><input id="radio2" value="2" class="uk-radio elementoTypeLanding" type="radio" name="radio2"> VIRTUAL</label>'+
        '</div>',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1'),
          document.querySelectorAll('input[name="radio2"]')
        ];
      }
    });
 
    if(titleArticle){
      let titleField : any = titleArticle[0];
      let typeField : any = titleArticle[1];
      let typeLanding : any = 1;
     
      typeField.forEach((a:any)=>{
        if(a.checked){
          typeLanding = a.value;
        }
      });
       
      this.Contentserv.createMatchPost(titleField.value, typeLanding).then((done:any)=>{
         
        let texto : string = done.Message;
        Swal.fire({
          title: 'Info!', 
          text: texto,
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        setTimeout( () => {
          const url = this.route.serializeUrl(
            this.route.createUrlTree([`/u/${done.Data.alias}`])
          );
          window.open(url, '_blank');



         // this.route.navigate(['/u/'+done.Data.alias]);
        }, 3000);

      }).catch((error:any) => {
        console.error(error);
        
      });
    }

  }
 
  statuschange(status:number,action:string){
    this.statusRightBar = status;
    console.log(this.statusReloadUsers);
    if(action){
      // emit de accion
      if(action == 'reloadParameters'){
        this.statusReloadParams = 1;
      } else if(action == 'reloadPenalties'){
        this.statusReloadPenalties = 1;
      } else if(action == 'reloadCategory'){
        this.statusReloadCategories = 1;
      } else if(action == 'reloadPanels'){
        this.statusReloadPanels = 1;
        this.statusReloadEvents = 1;
      } else if(action == 'reloadUsers'){
        console.log(this.statusReloadUsers);
        this.statusReloadUsers = 1; 
      } else if(action == 'reloadCompetitors'){
        console.log(this.statusReloadCompetitors);
        this.statusReloadCompetitors = 1; 
      } else if(action == 'reloadGrandCategories'){
       
        this.statusReloadGrandCategories = 1; 
      }
    }
  }

}
