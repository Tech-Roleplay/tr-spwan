/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';
import * as chat from '../../chat/server/index.js';

alt.on('playerConnect', (player: alt.Player) => {
    alt.log(`*[${player.id}]Player ${player.name} has with DC ${player.discordID} connected!`);

    player.model = 'a_m_y_tramp_01';
    player.spawn(0,0,80,2);

    chat.broadcast(`*[${player.id}]Player ${player.name} has connected!`);
    alt.emitClient(player, 'spawnPlayer');
});

alt.on('server:event:finish:authenticate', (player: alt.Player) => {

// Unused till TBA.
    
})