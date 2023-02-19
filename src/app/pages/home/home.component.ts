import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Tableau de personnes
  personnes = ["Mariam", "Patrick", "Yassir", "Monia", "Camille"];

  //Sélectionner une personne aléatoirement
  personnesAleatoire : string[] = [];

  //Fonction qui choisit une personne aléatoirement. Math.random pour générer un nombre décimal. On * ce nombre par la longueur du tableau. Math.floor pour arrondir le résultat = index aléatoire du tableau. On retourne la personne à cet index.
  selectGuys() {
    const select = Math.floor(Math.random() * this.personnes.length);
    return this.personnes[select];
  }

}
