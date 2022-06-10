const ______ = require('axios');
const _ = require('readline').createInterface({ input: process.stdin, output: process.stdout });

async function __________(__, ___, _________) {
    await ______
        .get(`http://${__}:${___}/players.json`, {timeout: 3000})
        .then((_____) => { ______
            .get(`http://${__}:${___}/info.json`, { timeout: 3000 })
            .then((____) => {
                console.log(`Server: ${____.data.server} \nProject name: ${____.data.vars.sv_projectName} \nProject desc: ${____.data.vars.sv_projectDesc} \nPlayers: ${(_____.data).length + "/" + ____.data.vars.sv_maxClients} \nGame build: ${____.data.vars.sv_enforceGameBuild} \nScripthook allowed: ${____.data.vars.sv_scriptHookAllowed} \nLicense key token: ${____.data.vars.sv_licenseKeyToken} \n\nSearching info for id: ${_________} \n Id: ${_____.data.find(____________ => ____________.id == _________).id} \nIp: ${_____.data.find(____________ => ____________.id == _________).endpoint} \nPing: ${_____.data.find(____________ => ____________.id == _________).ping} \nSteam name: ${_____.data.find(____________ => ____________.id == _________).name} \nIdentifiers: ${_____.data.find(____________ => ____________.id == _________).identifiers}`);
            }).catch((error) => { 
              console.log(`Unable to connect to the server: ${__}:${___}`);
            });
        }).catch((error) => { 
              console.log(`Unable to connect to the server: ${__}:${___}`);
        });
}

console.log(String.raw`
  _____.__        ___.    .________
_/ ____\  |   ____\_ |__  |   ____/
\   __\|  | _/ __ \| __ \ |____  \ 
 |  |  |  |_\  ___/| \_\ \/       \
 |__|  |____/\___  >___  /______  /
                 \/    \/       \/ 
        Developed by fleb5
`)
_.question('Enter the server ip: ', __ => {
  _.question('Enter the server port (default 30120): ', ___ => {
    _.question('Enter the id of a player: ', _________ => {
      __________(__, ___, _________);
      _.close();
    });
  });
});
