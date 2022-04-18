import { Component, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { CreateRouteComponent } from "../create-route/create-route";
import { ModalComponent } from "../modal-component/modal-component";
import { FrmDialogService } from "../services/dialog.servise";
import { Route, SortingTypes } from "../table-02.interface";
import { TableDataHttpService } from "../table-data.http-service";

@Component({
  selector: 'app-table-second',
  templateUrl: './table-second.component.html',
  styleUrls: ['./table-second.component.scss']
})

export class TableSecondComponent implements OnInit {
  public tableData: Route[] = [];
  public optionEnum = SortingTypes;
 
  constructor(
    private dialogService: FrmDialogService,
    private httpService: TableDataHttpService,
  ) {}

  ngOnInit(): void {
    this.loadData()
    }

  public create() {
    this.dialogService
    .openDialog(CreateRouteComponent, {
      width: '500px'
    })
    .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((res) => {
        this.loadData()
      })
  }

  public loadData() {
      this.httpService.getList().pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.tableData = res.payload.routes
      })
    }

  public onView(item: Route) {
    this.dialogService
      .openDialog(ModalComponent, {
        width: '500px',
        data: item
      })
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((res) => {
        this.loadData()
      })

  }

  public sorting(item: SortingTypes) {
    
    if(item == SortingTypes.address ){
        this.tableData.sort((a, b) => {
        if (a.address > b.address) {
          return 1
        } else {
          return -1
        }
        })
        return this.tableData 
      } else if(item == SortingTypes.gateway ){
        this.tableData.sort((a, b) => {
        if (a.gateway > b.gateway) {
          return 1
        } else {
          return -1
        }
        })
        return this.tableData 
      } else {
        this.tableData.sort((a, b) => {
        if (a.interface > b.interface) {
          return 1
        } else {
          return -1
        }
        })
        return this.tableData 
      }
    }

    protected destroy$ = new Subject();

    ngOnDestroy(): void {
      this.destroy$.next(true);
      this.destroy$.complete();
    }
    
}

