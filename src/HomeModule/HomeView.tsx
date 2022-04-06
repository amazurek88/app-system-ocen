import * as React from 'react'
import Content from "../globalComponent/Content";
import Box from "../globalComponent/Box";

export default class HomeView extends React.Component {

    //Strona główna

    render() {
        return(
            <Content>
                <Box>
                    <h2>Aplikacja - System ocen</h2>
                    <p>Informacje:</p>
                    <p>Aplikacja przeznaczona do zarządzania systemem oceniania.
                        Dzięki aplikacji mamy możliwość konfigurowania progów ocen szkolnych.</p>
                </Box>
            </Content>
        )
    }
}
