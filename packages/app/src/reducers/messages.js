import { createReducer } from '@bloom/utils'
import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'

addLocaleData(enLocaleData)

const initialState = {
  en: {},
}

export default createReducer(initialState, {})
