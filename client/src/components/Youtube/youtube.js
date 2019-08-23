import React from "react"
import Pageheader from 'react-bootstrap/lib/Pageheader';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';
import Grid from 'react-bootstrap/lib/Grid';

export default class Services extends React.Component {
  render() {
    return (
        <div id = "services">
            <Pageheader justified>
                About us
                <small>M2 Consulting is Bringing Small Businesses to the Agile century</small>
                <ResponsiveEmbed a16by9>
                    <embed src="https://www.youtube.com/embed/7lECIsRif10"/>
                </ResponsiveEmbed>
            </Pageheader>
        </div>
    )
  }
}