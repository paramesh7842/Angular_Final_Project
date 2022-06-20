import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApisharedService } from './apishared.service';
import { DialodBoxComponent } from './dialod-box/dialod-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular_final_project';
  Array: any = [];
  newArray:any=[];
  constructor(private dialog: MatDialog, 

    private api: ApisharedService) { }

  ngOnInit(): void {
    this.recieveMethod()
    this.api.getData().subscribe((data:any)=>{
      console.log(data)
      this.newArray=data
    })

  }

  openDialog() {
    this.dialog.open(DialodBoxComponent);
  }
  recieveMethod() {
    this.api.getMethod().subscribe((responce: any) => {
      console.log(responce)
      for (let i = 0; i < responce.records.length; i++) {
        this.Array.push(responce.records[i])
      }
    })
  }
  edit(item:any){
       this.dialog.open(DialodBoxComponent,{width:'350px', data:item})
  }
  delete1(index:number){
  this.Array.splice(index,1)
  }
  delete2(index:number){
    this.newArray.splice(index,1)
    }


}
