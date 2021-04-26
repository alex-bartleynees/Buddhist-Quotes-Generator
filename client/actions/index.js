import { getAllQuotes } from '../apis/quotes'

export const SET_QUOTES = 'SET_QUOTES'

export function setQuotes(quotes) {
  return {
    type: SET_QUOTES,
    quotes
  }
}

export function fetchQuotes() {
  return (dispatch) => getAllQuotes()
    .then((quotes) => {
      dispatch(setQuotes(quotes))
      return null
    })
    .catch(err => {
      (console.log(err.message))
    })

}
