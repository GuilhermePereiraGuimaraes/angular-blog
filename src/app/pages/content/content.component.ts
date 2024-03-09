import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string ="https://images8.alphacoders.com/134/1341367.png"
  contentTitle:string ="Meu Artigo"
  contentDescription:string ="Texto massa"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id!)
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover
    this.contentTitle = result.title
    this.contentDescription = result.description
  }
}
