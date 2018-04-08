import { Component, OnInit } from '@angular/core';
import { Recipie } from '../reciepies.model';


@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']

})
export class RecipiesListComponent implements OnInit {
  reciepies: Recipie [] = [
    new Recipie('A test reciepie', 'test1','../../../assets/food1.jpg'),
    new Recipie('Second Test Recipie', 'test2', '../../../assets/food2.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  newRecipie(name: string, description: string, path: string) {
    this.reciepies.push(new Recipie(name, description,path));
    this.reciepies.push(new Recipie('Second Test Recipie', 'test2', '../../../assets/food3.jpg'))
    console.log(this.reciepies);
  
  }

}
