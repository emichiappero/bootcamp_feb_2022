export interface Video_modelo {
  titulo: string;
  url: string;
  imagen: string;
  categoria: string;
  origen: string;
  estado: boolean;
  fecha: Date;
  _id?: string;
}

//El signo ? significa opcional
//Esto lo hago así, debido a que cuando hago un CREATE no envío el dato _id
