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
  public statusReloadParams    : number = 0;
  public statusReloadPenalties : number = 0;
  public statusReloadCategories : number = 0;
  public currentEdition         : any    = {};

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

  async createPost(){
    const { value: titleArticle } = await Swal.fire({
      title: "Let's create a new Match",
      html:
        '<input placeholder="title" type="text" id="swal-input1" class="swal2-input">' +
        '<div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">'+
            '<label><input value="1" class="uk-radio" type="radio" name="radio2" checked> PRECENSIAL</label>'+
            '<label><input value="2" class="uk-radio" type="radio" name="radio2"> VIRTUAL</label>'+
        '</div>',
      focusConfirm: false,
      preConfirm: () => {
        return [
           
          document.getElementById('swal-input1'),
          document.querySelector("input[name='radio2']")
           
        ]
      }
    });

    if(titleArticle){
      let titleField : any = titleArticle[0];
      let typeField : any = titleArticle[1];
      console.log(typeField.value);
       
      
      this.Contentserv.createMatchPost(titleField.value,typeField.value).then((done:any)=>{
         
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
          this.route.navigate(['/u/'+done.Data.alias]);
        }, 3000);

      }).catch((error:any) => {
        console.error(error);
        if(error){
          let texto : string = error.error.Message;
          if(error.error.status === 400){
            Swal.fire({
              title: 'Info!',
              text: texto,
              icon: 'info',
              showCancelButton: false,
              showConfirmButton: false
            });
          }
        }
      });
    }

  }

  statuschange(status:number,action:string){
    this.statusRightBar = status;
    if(action){
      // emit de accion
      if(action == 'reloadParameters'){
        this.statusReloadParams = 1;
      } else if(action == 'reloadPenalties'){
        this.statusReloadPenalties = 1;
      } else if(action == 'reloadCategory'){
        this.statusReloadCategories = 1;
      }
    }
  }

}
