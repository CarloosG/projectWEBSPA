import { CancionService } from './../cancion.service';
import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cancion',
  templateUrl: './update-cancion.component.html',
  styleUrls: ['./update-cancion.component.css']
})
export class UpdateCancionComponent implements OnInit {
  id: number;
  cancion: Cancion = new Cancion();
  constructor(private cancionService: CancionService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cancionService.getCancionById(this.id).subscribe(data => {
      this.cancion = data;
    }, error => console.log(error))
  }
  onSubmit(){
    this.cancionService.updateCancion(this.id, this.cancion).subscribe(data => {
      this.goToCancionList();
    }, error => console.log(error));
  }
  goToCancionList(){
    this.router.navigate(['/canciones/']);
  }

}
