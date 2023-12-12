import { CancionService } from './../cancion.service';
import { Cancion } from './../cancion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit {
  canciones: Cancion[];
  constructor(private cancionService: CancionService, private router: Router) { }

  ngOnInit(): void {
    this.getCanciones();
  }
  private getCanciones(){
    this.cancionService.getCancionesList().subscribe(data => {
      this.canciones = data;
    });
  }
  updateCancion(id: number){
    this.router.navigate(['update-cancion',id]);
  }
  deleteCancion(id: number){
    this.cancionService.deleteCancion(id).subscribe( data => {
      console.log(data);
      this.getCanciones();
    })
  }

}
