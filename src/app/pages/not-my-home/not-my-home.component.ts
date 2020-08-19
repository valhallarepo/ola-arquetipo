import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { takeUntilDestroy } from 'src/app/core/take-until-destroy';
import { NotMyHomeModel } from './model/not-my-home.model';
import { NotMyHomeService } from './services/not-my-home.service';

@Component({
  selector: 'app-not-my-home',
  templateUrl: './not-my-home.component.html',
  styleUrls: ['./not-my-home.component.scss']
})
export class NotMyHomeComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<NotMyHomeModel>;
  displayedColumns: string[] = ['id', 'title', 'body'];

  constructor(private notMyHomeService: NotMyHomeService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  ngOnDestroy(): void {
  }

  private getPosts(): void {
    this.notMyHomeService.all()
      .pipe(takeUntilDestroy(this))
      .subscribe(
        res => {
          this.dataSource = new MatTableDataSource<NotMyHomeModel>(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, err => {
          console.log(err);
        });
  }

}
