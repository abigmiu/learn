//  解除对象与对象之间的紧耦合关系

/**
 * 非中介者模式
 */
// all players
{
  const players = []

  function Player (name, teamColor) {
    this.partners = []
    this.enemies = []
    this.state = 'live'
    this.name = name
    this.teamColor = teamColor
  }

  Player.prototype.win = function () {
    console.log(this.name + '--win')
  }

  Player.prototype.lose = function () {
    console.log(this.name + '--lost')
  }

  Player.prototype.die = function () {
    let allDead = true
    this.state = 'dead'

    for (let i = 0; i < this.partners.length; i++) {
      const partner = this.partners[i]
      if (partner.state !== 'dead') {
        allDead = false
        break
      }
    }

    if (allDead === true) {
      this.lose()

      for (let i = 0; i < this.partners.length; i++) {
        const partner = this.partners[i]
        partner.lose()
      }

      for (let i = 0; i < this.enemies.length; i++) {
        const enemy = this.enemies[i]
        enemy.win()
      }
    }
  }

  // playerFactory
  const playerFactory = function (name, teamColor) {
    const newPlayer = new Player(name, teamColor)

    for (let i = 0; i < players.length; i++) {
      const player = players[i]
      if (player.teamColor === newPlayer.teamColor) {
        player.partners.push(newPlayer)
        newPlayer.partners.push(player)
      } else {
        player.enemies.push(newPlayer)
        newPlayer.enemies.push(player)
      }
    }

    players.push(newPlayer)

    return newPlayer
  }

  const player1 = playerFactory('pidan', 'red')
  const player2 = playerFactory('xiaoguai', 'red')

  playerFactory('heiniu', 'blue')
  playerFactory('constou', 'blue')

  player1.die()
  player2.die()
}

console.log('---------')
/**
 * 中介者模式
 */

{
  // 中介者对象
  function Player (name, teamColor) {
    this.name = name
    this.teamColor = teamColor
    this.state = 'alive'
  }

  Player.prototype.win = function () {
    console.log(this.name + '--won')
  }

  Player.prototype.lose = function () {
    console.log(this.name + '--lose')
  }

  Player.prototype.die = function () {
    this.state = 'dead'
    playerDirector.ReceiveMessage('playerDead', this)
  }

  Player.prototype.remove = function () {
    playerDirector.ReceiveMessage('removePlayer', this)
  }

  Player.prototype.changeTeam = function (color) {
    playerDirector.ReceiveMessage('changeTeam', this, color)
  }

  const playerFactory = function (name, teamColor) {
    const newPlayer = new Player(name, teamColor)

    playerDirector.ReceiveMessage('addPlayer', newPlayer)

    return newPlayer
  }

  const playerDirector = (function () {
    const players = {}
    const operations = {}

    operations.addPlayer = function (player) {
      const teamColor = player.teamColor
      players[teamColor] = players[teamColor] || []
      players[teamColor].push(player)
    }

    operations.removePlayer = function (player) {
      const teamColor = player.teamColor
      const teamPlayers = players[teamColor] || []

      for (let i = teamPlayers.length - 1; i >= 0; i--) {
        if (teamPlayers[i] === player) {
          teamPlayers.splice(i - 1)
        }
      }
    }

    operations.changeTeam = function (player, newTeamColor) {
      operations.removePlayer(player)
      player.teamColor = newTeamColor
      operations.addPlayer(player)
    }

    operations.playerDead = function (player) {
      const teamColor = player.teamColor
      const teamPlayers = players[teamColor]

      let allDead = true
      for (let i = 0; i < teamPlayers.length; i++) {
        const player = teamPlayers[i]
        if (player.state !== 'dead') {
          allDead = false
          break
        }
      }

      if (allDead === true) {
        for (let i = 0; i < teamPlayers.length; i++) {
          const player = teamPlayers[i]
          player.lose()
        }

        for (const color in players) {
          if (color !== teamColor) {
            const teamPlayers = players[color]

            for (let i = 0; i < teamPlayers.length; i++) {
              const player = teamPlayers[i]
              player.win()
            }
          }
        }
      }

      console.log('<<<<<<<<')
    }

    const ReceiveMessage = function () {
      const message = Array.prototype.shift.call(arguments)
      operations[message].apply(this, arguments)
    }

    return {
      ReceiveMessage
    }
  })()

  const player1 = playerFactory('pidan', 'red')
  const player2 = playerFactory('xiaoguai', 'red')

  const player3 = playerFactory('heiniu', 'blue')
  const player4 = playerFactory('constou', 'blue')

  player1.die()
  player2.die()
}
