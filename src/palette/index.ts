import Utils from '../utils'
import darkHardMatPalette from './material/darkHard'

export function getPalette() {
  const utils = new Utils()
  const config = utils.getConfiguration()
  const { selectionColor } = config

  return {
    darkHardPalette: { ...darkHardMatPalette, selectionColor }
  }
}
