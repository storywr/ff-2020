// ##############################################
// ##  Functions
// ##############################################

export const hexToRGB = (hexString: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);

  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0'
}

// ##############################################
// ##  Brand
// ##############################################

export const primary100 = '#D6E4FF'
export const primary200 = '#ADC8FF'
export const primary300 = '#84A9FF'
export const primary400 = '#6690FF'
export const primary500 = '#3366FF'
export const primary600 = '#254EDB'
export const primary700 = '#1939B7'
export const primary800 = '#102693'
export const primary900 = '#091A7A'

export const primaryClear100 = `rgba(${hexToRGB(primary500)}, 0.08)`
export const primaryClear200 = `rgba(${hexToRGB(primary500)}, 0.16)`
export const primaryClear300 = `rgba(${hexToRGB(primary500)}, 0.24)`
export const primaryClear400 = `rgba(${hexToRGB(primary500)}, 0.32)`
export const primaryClear500 = `rgba(${hexToRGB(primary500)}, 0.40)`
export const primaryClear600 = `rgba(${hexToRGB(primary500)}, 0.48)`

// ##############################################
// ##  Utility
// ##############################################

export const success100 = '#D5FCDB'
export const success200 = '#ABFAC1'
export const success300 = '#7FF0A9'
export const success400 = '#5DE19B'
export const success500 = '#2DCE89'
export const success600 = '#20B181'
export const success700 = '#169477'
export const success800 = '#0E7769'
export const success900 = '#086260'

export const successClear100 = `rgba(${hexToRGB(success500)}, 0.08)`
export const successClear200 = `rgba(${hexToRGB(success500)}, 0.16)`
export const successClear300 = `rgba(${hexToRGB(success500)}, 0.24)`
export const successClear400 = `rgba(${hexToRGB(success500)}, 0.32)`
export const successClear500 = `rgba(${hexToRGB(success500)}, 0.40)`
export const successClear600 = `rgba(${hexToRGB(success500)}, 0.48)`

export const danger100 = '#FEDED6'
export const danger200 = '#FEB5AE'
export const danger300 = '#FC8687'
export const danger400 = '#F96776'
export const danger500 = '#F5365C'
export const danger600 = '#D22759'
export const danger700 = '#B01B55'
export const danger800 = '#8E114D'
export const danger900 = '#750A48'

export const dangerClear100 = `rgba(${hexToRGB(danger500)}, 0.08)`
export const dangerClear200 = `rgba(${hexToRGB(danger500)}, 0.16)`
export const dangerClear300 = `rgba(${hexToRGB(danger500)}, 0.24)`
export const dangerClear400 = `rgba(${hexToRGB(danger500)}, 0.32)`
export const dangerClear500 = `rgba(${hexToRGB(danger500)}, 0.40)`
export const dangerClear600 = `rgba(${hexToRGB(danger500)}, 0.48)`

export const warn100 = '#FFF8CC'
export const warn200 = '#FFEF99'
export const warn300 = '#FFE466'
export const warn400 = '#FFD93F'
export const warn500 = '#FFC700'
export const warn600 = '#DBA600'
export const warn700 = '#B78600'
export const warn800 = '#936900'
export const warn900 = '#7A5400'

export const warnClear100 = `rgba(${hexToRGB(warn500)}, 0.08)`
export const warnClear200 = `rgba(${hexToRGB(warn500)}, 0.16)`
export const warnClear300 = `rgba(${hexToRGB(warn500)}, 0.24)`
export const warnClear400 = `rgba(${hexToRGB(warn500)}, 0.32)`
export const warnClear500 = `rgba(${hexToRGB(warn500)}, 0.40)`
export const warnClear600 = `rgba(${hexToRGB(warn500)}, 0.48)`

export const grey100	= '#F7FAFC'
export const grey200	= '#F7F9FC'
export const grey300	= '#EDF1F7'
export const grey400	= '#E4E9F2'
export const grey500	= '#C5CEE0'
export const grey600	= '#8F9BB3'
export const grey700	= '#2E3A59'
export const grey800	= '#222B45'
export const grey900	= '#1A2138'

export const greyClear100 = `rgba(${hexToRGB(grey600)}, 0.08)`
export const greyClear200 = `rgba(${hexToRGB(grey600)}, 0.16)`
export const greyClear300 = `rgba(${hexToRGB(grey600)}, 0.24)`
export const greyClear400 = `rgba(${hexToRGB(grey600)}, 0.32)`
export const greyClear500 = `rgba(${hexToRGB(grey600)}, 0.40)`
export const greyClear600 = `rgba(${hexToRGB(grey600)}, 0.48)`

export const black88 = 'rgba(0,0,0,0.88)'
export const black72 = 'rgba(0,0,0,0.72)'
export const black64 = 'rgba(0,0,0,0.64)'
export const black48 = 'rgba(0,0,0,0.48)'
export const black32 = 'rgba(0,0,0,0.32)'
export const black24 = 'rgba(0,0,0,0.24)'
export const black16 = 'rgba(0,0,0,0.16)'
export const black8 = 'rgba(0,0,0,0.08)'
export const black4 = 'rgba(0,0,0,0.04)'
export const black2 = 'rgba(0,0,0,0.02)'

export const white88 = 'rgba(255,255,255,0.88)'
export const white72 = 'rgba(255,255,255,0.72)'
export const white64 = 'rgba(255,255,255,0.64)'
export const white48 = 'rgba(255,255,255,0.48)'
export const white32 = 'rgba(255,255,255,0.32)'
export const white24 = 'rgba(255,255,255,0.24)'
export const white16 = 'rgba(255,255,255,0.16)'
export const white8 = 'rgba(255,255,255,0.08)'
export const white4 = 'rgba(255,255,255,0.04)'
export const white2 = 'rgba(255,255,255,0.02)'

// ##############################################
// ##  Special
// ##############################################

// export const backgroundGrey = '#f8fafe'
export const backgroundGrey = 'white'
export const hoverGrey = grey200
