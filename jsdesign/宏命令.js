// 一次执行一批命令
const closeDoorCommand = {
	execute: function () {
		console.log('close the door')
	}
}

const openPcCommand = {
	execute: function () {
		console.log('open the computer')
	}
}

const openQQCommand = {
	execute: function () {
		console.log('open the qq')
	}
}

const MacroCommand = function () {
	return { 
		commandsList: [],
		add: function (command) {
			this.commandsList.push(command)
		},
		execute: function () {
			this.commandsList.forEach(item => item.execute()) 
		}
	}
}

const macroCommand = MacroCommand()
macroCommand.add(closeDoorCommand)
macroCommand.add(openPcCommand)
macroCommand.add(openQQCommand)

macroCommand.execute()