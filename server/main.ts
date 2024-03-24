/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';

alt.on('playerConnect', (player: alt.Player) => {
    player.model = 'a_m_y_tramp_01';
    player.spawn(0,0,80,2);
});