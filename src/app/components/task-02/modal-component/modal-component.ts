import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subject, takeUntil } from "rxjs";
import { Route } from "../table-02.interface";
import { TableDataHttpService } from "../table-data.http-service";


@Component({
  selector: 'app-modal',
  templateUrl: './modal-component.html',
  styleUrls: ['./modal-component.scss']
})

export class ModalComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    address: [null],
    mask: [null],
    gateway: [null],
    interface: [null]
  });

  getFormControl(controlName: string, defValue?: any, validators?: ValidatorFn[]): FormControl {
    if (!this.form.contains(controlName)) {
      this.form.addControl(controlName, new FormControl(defValue, validators));
    }
    return this.form.get(controlName) as FormControl;
  }
 

    constructor(
    public dialogRef: MatDialogRef<any>,
    private httpService: TableDataHttpService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Route
  ) {}

  public control: FormControl = new FormControl();
  public selectControl: FormControl = new FormControl();


    ngOnInit(): void {
        this.initForm()
    }

    public initForm() {
      if(this.data) {
        this.form = this.fb.group({
          address: this.data.address,
          mask: this.data.mask,
          gateway: this.data.gateway,
          interface: this.data.interface
        })
      }
    }
    
    public onNoClick(): void {
      this.dialogRef.close();
    }

    public deleteItem() {
      this.httpService.delete(this.data.uuid).subscribe(res => this.dialogRef.close())
    }

    public save() {
      const data: Route = {
        address: this.getFormControl('address').value,
        mask: this.getFormControl('mask').value,
        gateway: this.getFormControl('gateway').value,
        interface: this.getFormControl('interface').value
      }
      this.httpService.modified(this.data.uuid, data)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(res => {
        if(res) {
          this.dialogRef.close()
        }
      })
    }





    protected destroy$ = new Subject();

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
    }
  
}