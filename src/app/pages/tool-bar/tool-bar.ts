import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  imports: [MatToolbarModule],
  templateUrl: './tool-bar.html',
  styleUrl: './tool-bar.scss'
})
export class ToolBar {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigateByUrl('/', { skipLocationChange: false });
  }
}
