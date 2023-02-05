import React from 'react';
import { StyleSheet, css} from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils'

const styles = StyleSheet.create({
  AppFooter: {
    borderTop: "4px solid #E0354B",
    position: "absolute",
    bottom: '0%',
    width: '99%'
  },
  
  AppFooter_p: {
    fontStyle: "italic",
    textAlign: "center"
  }

})

export default function Footer() {
  return (
    <div className={css(styles.AppFooter)}>
      <p className={css(styles.AppFooter_p)}>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
    </div>
    )
  }

