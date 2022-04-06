import * as React from 'react'
import AppConfiguration from '../configuration/AppConfiguration';

export default class Footer extends React.Component {

    onMenu = () => {
        // @ts-ignore
        document.getElementById("sidenav").style.width = "250px";
    }

    render() {
        return(
            <div id={'footer'}>
                <div id={'f-inner'}>
                    <span id={'f-name'}>
                        {AppConfiguration.APP_NAME()},
                    </span>
                    <span id={'f-update'}>
                        Version: {AppConfiguration.APP_UPDATE()}
                    </span>
                    <span id={'f-ver'}>
                        {AppConfiguration.APP_VER()}
                    </span>
                </div>
            </div>
        )
    }
}
