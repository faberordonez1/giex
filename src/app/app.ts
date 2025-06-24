import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { Topbar } from './layout/topbar/topbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'giex';
}
