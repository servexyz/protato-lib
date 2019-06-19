import { parser } from "./parser";
import config from "../.protato";

function init(oConfig = config) {
  parser(oConfig);
}
