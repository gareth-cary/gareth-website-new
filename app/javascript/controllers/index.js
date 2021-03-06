// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "stimulus"
import Carousel from "stimulus-carousel"

const application = Application.start()
application.register("carousel", Carousel)

