import * as React from 'react';

export default class Header extends React.Component {

    onMenu = () => {
        // @ts-ignore
        document.getElementById("sidenav").style.width = "250px";
    }

    render() {
        return(
        <div className = {'header'} >
            <button id={'menuButton'} onClick={this.onMenu}>
                <span onClick={this.onMenu}><i className={'fa fa-bars'}/></span>
            </button>
            <div className={'push'}>
                <button type="button" className="btn btn-danger" onClick={() => alert('Akcja wyloguj.')}><i className={"fa fa-power-off"}/> Wyloguj</button>
            </div>
        </div>
        )
    }
}
