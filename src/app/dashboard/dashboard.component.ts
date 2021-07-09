import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public mansory : number = 1;

  constructor(private Contentserv: ContentService, private route: Router) { }

  ngOnInit(): void {
  }

  async createPost(){
    const { value: titleArticle } = await Swal.fire({
      title: "Let's create a new article",
      input: 'text',
      inputLabel: 'Write a title',
      inputValue: '',
      showCancelButton: true
    });

    if(titleArticle){
      this.Contentserv.createpost(titleArticle).then((done:any)=>{
        console.log(done);
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

}
