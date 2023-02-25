import Fish from "../components/Fish";
import Scene from "./Scene";
import { BitmapText } from "pixi.js";
import {center} from "../core/utils.js"
export default class Play extends Scene {
  async onCreated() {
    const fish = new Fish();
   //center(fish,{widht:fish.width,height:fish.height})
    fish.anchor.set(0.5,0.5);
    
    
    this.addChild(fish);
    fish.interactive = true;
   fish.buttonMode = true;

   fish.on("pointerdown",fish.expand)
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}
