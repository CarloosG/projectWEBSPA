import { CancionService } from './../cancion.service';
import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cancion',
  templateUrl: './create-cancion.component.html',
  styleUrls: ['./create-cancion.component.css']
})
export class CreateCancionComponent implements OnInit {

  cancion: Cancion = new Cancion();
  constructor(private cancionService: CancionService,private router: Router) { }

  ngOnInit(): void {
  }
  saveCancion(){
    this.cancionService.createCancion(this.cancion).subscribe( data =>{
      console.log(data);
      this.goToCancionList();
    }, error => console.log(error));
  }
  goToCancionList(){
    this.router.navigate(['/canciones/']);
  }

  onSubmit(){
    console.log(this.cancion);
    this.saveCancion();
  }

}
