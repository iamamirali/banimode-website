import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  showLoading: boolean = true

  constructor(private loaderService: LoadingService) { }

  ngOnInit(): void {
    this.getLoadingStatus()
  }

  getLoadingStatus() {
    this.loaderService.loader$.subscribe((status) => this.showLoading = status)
  }

}
