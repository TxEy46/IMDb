import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolBar } from "./pages/tool-bar/tool-bar";

@Component({
  selector: 'app-root',
  imports: [RouterModule, ToolBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-hw3';
}
