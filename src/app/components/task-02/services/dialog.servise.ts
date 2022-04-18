import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';

@Injectable({
  providedIn: 'root'
})
export class FrmDialogService {

  constructor(
    private dialog: MatDialog,
  ) {
  }

  public openDialog<T, D = any, R = any>(dialogClass: ComponentType<T>, config: MatDialogConfig): Observable<any> {
    return this.openDialogRef(dialogClass, config)
      .afterClosed();
  }

  public openDialogRef<T, D = any, R = any>(dialogClass: ComponentType<T>, config: MatDialogConfig): MatDialogRef<T, R> {

    const defaultConfig: MatDialogConfig = {
      panelClass: 'dialog-container',
      backdropClass: 'dialog-backdrop',
      autoFocus: false,
      disableClose: true
    };

    return this.dialog.open(dialogClass, {...defaultConfig, ...config});
  }
}