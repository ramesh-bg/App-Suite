import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _snackBar: MatSnackBar) { }

  /**
   * Opens snackbar with a message
   * @param {string} message  Message to be displayed .
   * @param {string} [action = "Close"]  Action message
   * @param {Number} [duration = '1000']  Duration of the snackbar
   * @param {Object} config Extra Config Options
   * panelClass : ['snacky', 'success/error/warn']
   */
  public openSnackBar(message, action, duration?, config?) {
    this._snackBar.open(message || '', action || 'Close', {
      duration: duration || 3000,
      ...config
    });
  }
}
