import _ from 'lodash'
import { StyleSheet, Dimensions, StatusBar } from 'react-native'
import { isIphoneX } from '../libraries/iphonex'
import { STYLE_SHEET, DEFAULT_HEADER_GRADIENT } from '../configs'
const { height } = Dimensions.get('window')
const { height: screenHeight } = Dimensions.get('screen')

export const DEFAULT_HEADER_HEIGHT = isIphoneX() ? 80 : 60
export const DEFAULT_HEADER_COLOR = '#0061B1'
export const DEFAULT_TEXT_COLOR = '#979797'
export const HEADER_GRADIENT = DEFAULT_HEADER_GRADIENT

export const isFixedSize = parseInt(height) === parseInt(screenHeight - StatusBar.currentHeight)
export const appHeight = height - (!isFixedSize ? StatusBar.currentHeight : 0)

const style = {
  defaultPage: {
    flex: 1,
    display: 'flex',
    height: appHeight,
    flexDirection: 'column'
  },
  defaultBackgroundColor: {
    backgroundColor: '#F8F8F8'
  },
  backgroundColor: {
    backgroundColor: '#FFFFFF'
  },
  defaultHeaderHeight: {
    height: DEFAULT_HEADER_HEIGHT,
    width: '100%'
  },
  status_bar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: StatusBar.currentHeight
  },
  shadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 * 5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 5
  },
  text: {},
  btnPrimary: { backgroundColor: '#0061B1' },
  btnDisable: { backgroundColor: '#B7C4CC' },
  btnText: { color: '#FFFFFF' },
  alertSuccess: { color: 'blue' },
  alertDanger: { color: 'blue' },
  table: {},
  txtHeader: { fontSize: 17, color: '#fff' },
  input: {},
  colorPrimary: {},
  colorDisabled: {},
  colorActive: {},
  listTxs: {},
  listMenu: {},
  modalFooter: {},
  modalBody: {},
  modalHeader: {},
  bottom_bar_container: {
    borderTopColor: 'transparent',
    height: 52
  },
  bottom_bar_item_overlay: {
    backgroundColor: 'background-color: rgba(73,126,204,0.05)',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  bottom_bar_item_bar: {
    position: 'absolute',
    width: '100%',
    height: 2,
    top: 0
  }
}

export default StyleSheet.create(_.merge(style, STYLE_SHEET))

export const textStyle = {
  headline: {
    fontFamily: 'opensans-bold',
    fontWeight: 'normal'
  },
  subtitle: {
    fontFamily: 'opensans-semibold',
    fontWeight: 'normal'
  },
  paragraph: {
    fontFamily: 'opensans-regular',
    fontWeight: 'normal'
  },
  caption1: {
    fontFamily: 'opensans-regular',
    fontWeight: 'normal'
  },
  caption2: {
    fontFamily: 'opensans-semibold',
    fontWeight: 'normal'
  },
  label: {
    fontFamily: 'opensans-bold',
    fontWeight: 'normal'
  },
  button: {
    // fontFamily: 'opensans-extrabold',
    // fontWeight: 'normal',
  }
}
