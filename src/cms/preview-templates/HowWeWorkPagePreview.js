import React from 'react'
import PropTypes from 'prop-types'
import { HowWeWorkPageTemplate } from '../../templates/how-work-page'

const HowWeWorkPagePreview = ({ entry, widgetFor }) => (
  <HowWeWorkPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HowWeWorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HowWeWorkPagePreview
