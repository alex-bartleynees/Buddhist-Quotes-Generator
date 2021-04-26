import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchQuotes } from '../actions/index'

const Quotes = ({dispatch, quotes}) => {

  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])

  const getNewQuote = () => {
    console.log('click')
    useEffect(() => {
      dispatch(fetchQuotes())
    }, [])
  
  }

  return (
    <div className="container">
      <div className='quote'>
        <p>{quotes.text}</p>
      </div>
        <div className='author'>
          <p><span>Buddha</span></p>
        </div>
        <div className="button" onClick={()=> getNewQuote}>
          <p>New Quote</p>
        </div>

    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    quotes: globalState.quotes
  }
}

export default connect(mapStateToProps)(Quotes)
