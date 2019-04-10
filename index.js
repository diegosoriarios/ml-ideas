const brain = require('brain.js')
let model = new brain.NeuralNetwork()

model.train([
    { input: { lebron: 32, restOfTeam: 64 }, output: { win: 1, loss: 0 } },
    { input: { lebron: 24, restOfTeam: 67 }, output: { win: 0, loss: 1 } },
    { input: { lebron: 36, restOfTeam: 58 }, output: { win: 1, loss: 0 } },
    { input: { lebron: 20, restOfTeam: 81 }, output: { win: 0, loss: 1 } },
    { input: { lebron: 51, restOfTeam: 58 }, output: { win: 0, loss: 1 } },
    { input: { lebron: 33, restOfTeam: 46 }, output: { win: 1, loss: 0 } },
    { input: { lebron: 28, restOfTeam: 55 }, output: { win: 1, loss: 0 } },
    { input: { lebron: 25, restOfTeam: 77 }, output: { win: 0, loss: 1 } },
    { input: { lebron: 49, restOfTeam: 63 }, output: { win: 1, loss: 0 } },
    { input: { lebron: 38, restOfTeam: 68 }, output: { win: 1, loss: 0 } },
    { input: { lebron:  0, restOfTeam: 0  }, output: { win: 0, loss: 1 } }
]);

console.log(model.run({ lebron: 46, restOfTeam: 40 }))