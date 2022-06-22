import { Component, OnInit, HostListener } from '@angular/core';
import { SugessDatum } from 'src/app/models/suggestions.model';
import { ActivatedRoute } from '@angular/router';
import { ProductSlider } from '../models/product-slider.model';

@Component({
  selector: 'app-home-suggestions',
  templateUrl: './home-suggestions.component.html',
  styleUrls: ['./home-suggestions.component.scss']
})
export class HomeSuggestionsComponent implements OnInit {

  suggestions : SugessDatum[] = []
  screenWidth: number = window.innerWidth

  suggestionsSlideConfig = new ProductSlider()

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSuggestions()
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenWidth = window.innerWidth;
  }

  getSuggestions() {
    this.suggestions = this.route.snapshot.data['homeResolver'].suggestions.data.data
  }
}