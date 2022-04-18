import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subject, takeUntil } from "rxjs";
import { Route } from "../table-02.interface";
import { TableDataHttpService } from "../table-data.http-service";


@Component({
  selector: 'app-create',
  templateUrl: './create-route.html',
  styleUrls: ['./create-route.scss']
})

export class CreateRouteComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    address: [null],
    mask: [null],
    gateway: [null],
    interface: [null]
  });
  public control: FormControl = new FormControl();

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

    ngOnInit(): void {
        
    }
    
    public onNoClick(): void {
      this.dialogRef.close();
    }

    public filterSymbols(event: KeyboardEvent) {
      return new RegExp(`^[0-9.]+$`).test(event.key);
  }

    public save() {
      const data: Route = {
        address: this.getFormControl('address').value,
        mask: this.getFormControl('mask').value,
        gateway: this.getFormControl('gateway').value,
        interface: this.getFormControl('interface').value
      }
      this.httpService.create(data)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(res => {
        if(res) {
          this.dialogRef.close()
        }
      })
    }

    public get isFormValid(): boolean {
    return this.form.valid;
  }


    protected destroy$ = new Subject();

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
    }
  
}