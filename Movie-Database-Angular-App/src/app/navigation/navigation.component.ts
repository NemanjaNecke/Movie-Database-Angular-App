import { MultiSearchService } from './../search-results/multi-search.service';
import { Router } from '@angular/router';
import { DialogComponent } from './../tvshows/details/image-galery/dialog/dialog.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { SearchdiagComponent } from './searchdiag/searchdiag.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  innerWidth!: any;
  value!: any;
  @HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
     public dialog: MatDialog, private router: Router, private multi: MultiSearchService) {}
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '40rem'
    dialogConfig.hasBackdrop = true;
  const dialogRef =  this.dialog.open(SearchdiagComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
    (data) => {
      this.value = data;
      this.multi.sendQuery(this.value)
      this.router.navigateByUrl('/search-results/'+this.value)
      this.pageLoad()
    }
);    

  }
  pageLoad() {
    setInterval(() => {window.location.reload()}, 500)
  }
}
