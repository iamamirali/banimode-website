import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { NewsletterEmailResultComponent } from './newsletter-email-result/newsletter-email-result.component';

@Component({
  selector: 'app-home-newsletter-signup',
  templateUrl: './home-newsletter-signup.component.html',
  styleUrls: ['./home-newsletter-signup.component.scss']
})
export class HomeNewsletterSignupComponent implements OnInit {

  emailInput: string = ''

  constructor(private dialog: MatDialog, private dataFetch: DataProccessService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(NewsletterEmailResultComponent, {
    })
  }

  // onSendEmailClick() {
  //   const emailData = new FormData()
  //   emailData.append("email", this.emailInput)
    
  //   this.openDialog()
  //   this.dataFetch.sendEmail(emailData).subscribe((data) => {
  //     console.log(data);
  //   })
  // }

}
