import { Component } from '@angular/core';
import { Guys, GUYS } from 'src/app/mocks/guys.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Tableau de personnes
  persones: Guys[] = GUYS;
  result: Guys[] = GUYS;
  isVisible = true;

  //Sélectionner une personne aléatoirement
  select(){
    this.result =this.persones;
  }

  //Fonction qui choisit une personne aléatoirement. Math.random pour générer un nombre décimal. On * ce nombre par la longueur du tableau. Math.floor pour arrondir le résultat = index aléatoire du tableau. On retourne la personne à cet index.
  selectGuys() {
    const select = Math.floor(Math.random() * this.persones.length);
    return this.persones[select];
  }

  //Fonction qui filtre les personnes selon le genre
  filterGuys(genre: string) {
    this.result = this.persones.filter(personne => personne.genre === genre);
  }

}
