import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApisharedService } from '../apishared.service';

@Component({
  selector: 'app-dialod-box',
  templateUrl: './dialod-box.component.html',
  styleUrls: ['./dialod-box.component.scss']
})
export class DialodBoxComponent implements OnInit {
  form: any;
  actionBtn: string = "Submit";
  myArray: any = [];
  constructor(private dialogRef: MatDialogRef<DialodBoxComponent>,
    private api: ApisharedService,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'firstname': new FormControl("", [Validators.required]),
      'lastname': new FormControl("", [Validators.required]),
      'dob': new FormControl("", [Validators.required]),
      'gender': new FormControl("", [Validators.required]),
      'status': new FormControl("", [Validators.required])
    })


    if (this.editData) {
      this.actionBtn = "Update"
      this.form.controls['firstname'].setValue(this.editData.firstname);
      this.form.controls['lastname'].setValue(this.editData.lastname);
      this.form.controls['dob'].setValue(this.editData.dob);
      this.form.controls['gender'].setValue(this.editData.gender);
      this.form.controls['status'].setValue(this.editData.status);
    }

  }
  addValue() {
    if (!this.editData) {
      if (this.form.valid) {
        this.api.postData(this.form.value).subscribe((data: any) => {
          console.log(data)
          this.myArray = data
        })

        console.log(this.form.value)
        this.form.reset();
        this.dialogRef.close();
      }


    }
    else {
      this.updateProduct()

    }
  }
  updateProduct() {
    this.api.getProduct(this.form.value, this.editData.id).subscribe((data: any) => {
      console.log(data)
      
    })
  }
}