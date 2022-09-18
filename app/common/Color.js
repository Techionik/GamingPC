/** @format */

import { Color } from './index'

export default {
  error: '#f44336',
  facebook: '#3b5998',
  google: '#d34836',
  transparent: 'rgba(207, 212, 216, 0.1)',

  main: '#fff',
  primaryDark: '#0097a7',
  rippleColor: '#0556a0',
  primary: '#40E0D0',

  primaryLight: '#666666',
  accent: '#00A859',
  accentLight: '#FFD54F',
  gray: '#787676',
  grayback:"#F5F5F5",
  grayIn:"#989393",
  white: '#ffffff',
  orange: '#F2711C',
  olive: '#B5CC18',
  green: '#51d96c',
  teal: '#00B5AD',
  blue: '#2185D0',
  violet: '#6435C9',
  purple: '#A333C8',
  pink: '#E03997',
  brown: '#A5673F',
  borderColor: '#f2f4f5',
  heading_color: '#003761',
  regular_text_color: '#949494',
  theme_color: '#1476d1',
  light_orange: '#fde1b8',
  dark_orange: '#f38d5b',
  yellow: '#c9b62c',
  disabled_color: '#949494',
  yellow_btn_color: '#feba00',
  stepActive: '#2AB5B3',
  stepInActive: 'rgba(207, 212, 216, 0.8)',

  blackTextPrimary: 'rgba(0,0,0,1)',
  blackTextSecondary: 'rgba(0,0,0,0.5)',
  blackTextDisable: 'rgba(0,0,0,0.3)',
  lightTextPrimary: 'rgba(255,255,255,1)',
  lightTextSecondary: 'rgba(255,255,255,255.5)',
  lightTextDisable: 'rgba(255,255,255,0.3)',

  lightDivide: 'rgba(255,255,255,0.12)',
  blackDivide: 'rgba(0,0,0,0.05)',

  background: 'white',

  Background: '#FFFFFF',
  DirtyBackground: '#F0F0F0',
  Error: '#f96b6b',

  // Toolbar
  Toolbar: 'white',
  ToolbarText: '#283747',
  ToolbarIcon: '#283747',

  ToolbarTrans: 'transparent',
  ToolbarTextTrans: 'black',
  ToolbarIconTrans: 'black',

  TopBar: 'white',
  TopBarIcon: '#283747',

  // Button
  ButtonBackground: '#00aef0',
  ButtonText: 'white',
  ButtonBorder: '#bcbebb',

  // Product tabs
  TabActive: '#00BCD4',
  TabDeActive: 'white',
  TabActiveText: '#333',
  TabText: '#333',
  BuyNowButton: '#00BCD4',
  OutOfStockButton: '#a44',

  ViewBorder: '#bcbebb',

  // Text
  Text: '#585858',
  TextDefault: '#585858',
  TextNormal: '#77a464',
  TextLight: 'darkgray',
  TextDark: '#000000',

  SideMenuText: 'rgba(0, 0, 0, 0.7)',
  SideMenuTextActived: '#000',
  SideMenuIcon: 'white',

  // bottom tab bar
  tabbar: 'rgba(255, 255, 255, 1)',
  get tabbarTint () {
    return this.primary
  },
  tabbarColor: '#000',

  // navigation bar
  get headerTintColor () {
    return this.primary
  },
  navigationBarColor: '#ffffff',
  navigationBarIcon: 'rgba(0, 0, 0, 0.3)',
  navigationTitleColor: 'rgba(0, 0, 0, 0.8)',

  // wishlist
  heartActiveWishList: 'rgba(252, 31, 74, 1)',

  spin: '#333333',

  attributes: {
    black: '#333',
    red: '#DF3737',
    green: '#2AB5B3',
    blue: '#38B1E7',
    yellow: '#FDF12C'
  },
  lightGrey: 'rgba(247, 248, 250, 1)',
  lightGrey1: 'rgba(212, 220, 255, 1)',
  darkOrange: 'rgba(255, 132, 11, 1)',
  darkYellow: 'rgba(255, 164, 31, 1)',
  darkRed: '#8B0000',
  red: '#FF0000',
  lightgrey: '#D3D3D3',
  lightBlue: '#9ddaff',
  blue1: 'rgba(30, 165, 233, 1)',
  blue2: 'rgba(3, 207, 254, 1)',
  grey2: '#adb5bd',
  mapStyle: [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e'
        }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#746855'
        }
      ]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e'
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#fff2fd'
        },
        {
          weight: 1
        }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c'
        }
      ]
    }
  ]
}

// Color system
export const white = '#efefef'
export const grey1 = '#989393'
export const grey2 = '#dddddd'
export const grey3 = '#b8b4b6'
export const grey4 = '#7b7b7b'
export const grey5 = '#999999'
export const grey6 = '#777777'
export const grey7 = '#383838'
export const grey8 = '#1e1e1e'
export const grey9 = '#2C2C2C'
export const black = '#121212'
export const black2 = '#292929'
export const primary = '#1476d1'
export const darkPrimary = '#212242'
export const darkSecondary = '#262b49'
export const lightblack = '#292929'
export const darkgrey = '#7b7b7b'
export const lightTheme = {
  key: 'light',
  colors: {
    primary: primary,
    bgColor: '#f7f7f7',
    bgColorWhite: '#fff',
    grey1Black2: '#f7f7f7',
    lightgrey: '#fff',
    darkgrey: '#dddddd',
    samegrey: '#b8b4b6',
    white: black,
    app_bg: 'rgba(20, 118, 209, .12)',
    primaryBg: primary,
    primaryBg2: white,
    primaryWhite: primary,
    primaryBlack: primary,
    lightPrimaryBlack: '#0b67bd',
    primaryBlack2: primary,
    whiteBlack: '#fff',
    whiteBlack2: white,
    greyBlack2: '#dddddd',
    whiteBlackFg: '#fff',
    lightPrimaryLightblack: '#0b67bd',
    sheetOverlay: 'rgba(0, 0, 0, 0.65)',
    greyHBlackH: '#f7f7f7',
    highlight: 'rgba(225, 239, 250, .61)',
    fgGrey: '#f5f5f5',
    greyWhite:"#fff",
    grey1black1: '#dddddd',
    grey1BlackBg: '#f7f7f7',
  }
}

export const darkTheme = {
  key: 'dark',
  colors: {
    primary: black,
    bgColor: black,
    bgColorWhite: black,
    lightgrey: black2,
    grey1Black2: black2,
    darkgrey: '#616161',
    samegrey: '#b8b4b6',
    white: white,
    app_bg: black2,
    primaryBg: '#212020',
    primaryBg2: black2,
    primaryWhite: white,
    primaryBlack: black,
    primaryBlack2: black2,
    lightPrimaryBlack: black2,
    whiteBlack2: black2,
    whiteBlackFg: black2,
    whiteBlack: '#000',
    greyBlack2: '#b8b4b6',
    lightPrimaryLightblack: lightblack,
    sheetOverlay: 'rgba(0, 0, 0, 0.65)',
    greyHBlackH: '#212020',
    highlight: '#1d2947',
    fgGrey: '#212020',
    greyWhite:"#616161",
    grey1black1: black,
    grey1BlackBg: '#212020',
  }
}