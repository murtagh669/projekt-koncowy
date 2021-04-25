export class SpaceShip {
  modelName:string;
  imageUrl: string;
  health: 100; // number
  activeShields: true; //boolean
  activeWeapons: true;  //boolean

  constructor(modelName: string, imageUrl: string){
    this.modelName = modelName;
    this.imageUrl = imageUrl;
  }
}
