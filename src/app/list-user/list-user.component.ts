import { Component } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  alumnos :Alumnos []=[
    {
      idDni:9529086,
      nombre :'JESSICA ANGELICA',
      apellidoPaterno:'AIRA',
      apellidoMaterno:'HIDALGO',
      mail:'jessangel.aira@gmail.com',
      telefono:952024107,
    },
    {
      idDni:48232833,
      nombre :'LUIS ANGEL',
      apellidoPaterno:'ALVAREZ',
      apellidoMaterno:'ALBERCA',
      mail:'luis.alvarez1@unmsm.edu.pe',
      telefono:980765715,
    },
    {
      idDni:48105655,
      nombre :'GABRIELA',
      apellidoPaterno:'LUISA',
      apellidoMaterno:'ALVAREZ PAREDE',
      mail:'gabyap2294@gmail.com',
      telefono:960152699,
    },
    {
      idDni:70689775,
      nombre :'OHAN',
      apellidoPaterno:'ANTHONY',
      apellidoMaterno:'ALVAREZ PARINA',
      mail:'johansm1227@gmail.com',
      telefono:999122129,
    },
    {
      idDni:71395552,
      nombre :'PAMELA',
      apellidoPaterno:'ANDRES',
      apellidoMaterno:'DEL CASTILLO',
      mail:'a20135576@pucp.edu.pe',
      telefono:993946230,
    },
    {
      idDni:45323766,
      nombre :'IRVIN',
      apellidoPaterno:'ANGULO',
      apellidoMaterno:'PALACIOS',
      mail:'finanzas.iaap@gmail.com',
      telefono:926577141,
    },
    {
      idDni:70653223,
      nombre :'FERNANDO',
      apellidoPaterno:'JAVIER',
      apellidoMaterno:'BALLON	ESTACIO',
      mail:'fballonestacio@gmail.com',
      telefono:946570423,
    },
    {
      idDni:73579542,
      nombre :'BRYAN',
      apellidoPaterno:'JESUS',
      apellidoMaterno:'BAQUERIZO	SANTILLAN',
      mail:'bryan.baquerizo1108@gmail.com',
      telefono:946570423,
    },
    {
      idDni:73455044,
      nombre :'SAID',
      apellidoPaterno:'JESUS',
      apellidoMaterno:'BAQUERIZO	SANTILLAN',
      mail:'saidbarrientos.09@gmail.com',
      telefono:995990336,
    },
  ]
}

interface Alumnos{
  idDni:number,
  nombre :string,
  apellidoPaterno:string,
  apellidoMaterno:string,
  mail:string,
  telefono:number,
  }
