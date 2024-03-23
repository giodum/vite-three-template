import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

const DEV_HELPERS = false
const DEV_WIREFRAMES = false

export default class Scene3D {
  // unique instance
  static item = null

  constructor() {
    // check previous existance of the instance
    if (Scene3D.item) {
      throw new Error('Scene3D has already been initialized')
    }

    // add event listeners
    this.eventListeners()

    // animation loop
    this.animate()
  }

  eventListeners() {}

  animate(time) {
    requestAnimationFrame((time) => this.animate(time))
  }

  static init() {
    if (!Scene3D.item) {
      Scene3D.item = new Scene3D()
    }
  }
}
