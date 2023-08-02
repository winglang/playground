import { startPreview } from "./preview";
import { startCompiler } from './compiler';

if (process.env.WING_CODE) {
  startPreview(process.env.WING_CODE);
} else {
  startCompiler();
}
