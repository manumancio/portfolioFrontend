import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educationAcadList: any;
  educationCursList: any;
  educationIdiomList: any;
  skillsList: any;

  constructor(private datosPortfolio: PortfolioService) { }
  
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {      
      this.educationAcadList = data.educationAcademica;
      this.educationCursList = data.educationCursos;
      this.educationIdiomList = data.educationIdiomas;
      this.skillsList = data.skills;
    })
  }
}
