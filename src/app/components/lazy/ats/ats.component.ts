import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { OfertaLaboral } from 'src/app/models/oferta-laboral.model';
import { OfertasLaboralesService } from 'src/app/services/ofertas-laborales.service';

@Component({
  selector: 'app-ats',
  templateUrl: './ats.component.html',
  styleUrls: ['./ats.component.scss']
})
export class AtsComponent implements OnInit {
  constructor(private ofertasLaboralesService: OfertasLaboralesService) {}

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  ofertaLaboral!: OfertaLaboral;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  obtenerOferta() {
    const idOferta = 10;
    this.ofertasLaboralesService.obtenerOferta(idOferta).subscribe(ofertaLaboral => {
      console.log(ofertaLaboral)
      this.ofertaLaboral = ofertaLaboral;
    });
  }

  ngOnInit(): void {
      this.obtenerOferta();
  }
}
