import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-update',
  template: `
    <button (click)="update(value)" class="btn btn-primary m-3" id="updatebutton">Update</button>
  `,
  styles: `
  #updatebutton{
    font-size: 13px
}
    `
})
export class UpdateComponent implements ICellRendererAngularComp {

  value:any;
  agInit(params: ICellRendererParams): void {
    this.value = params.value
  }

  refresh(params: ICellRendererParams): boolean {
    return false
  }

  constructor(private router: Router){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  update(id:any){
    this.router.navigateByUrl(`update/${id}`)
  }

}
