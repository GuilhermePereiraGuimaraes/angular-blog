import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string ="https://images8.alphacoders.com/134/1341367.png"
  contentTitle:string ="Meu Artigo"
  contentDescription:string ="Texto massa"
}
