import { Sprite, Texture } from "pixi.js";

export default class Fish extends Sprite {
  constructor() {
    Fish.sprite = new Sprite.from("small");

    super(Fish.sprite.texture);
     
    this.name = "fish";
  }
createSprite(){
    
}

expand(){
   
    this.scale.set(1.5,1.5);
   this.texture = Texture.from("big")
    setTimeout(this.contract.bind(this),5000);
}
contract(){
  this.texture = Texture.from("small")
    this.scale.set(1,1);
}
}
