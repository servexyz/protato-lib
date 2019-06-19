import { PTOParser } from "./parser";
import config from "../.protato";

function init(oConfig = config) {
  let parser = new PTOParser(oConfig);
}

init();
