const LinkedList = require("./linkedList")

sushiPreparation = new LinkedList()
sushiPreparation.insertAtEnd("prepare")
sushiPreparation.insertAtEnd("roll")
sushiPreparation.insertAtBeginning("assemble")

console.log(sushiPreparation.print());

console.log("\n\n");

sushiPreparation.reverse();
console.log(sushiPreparation.print());

// assemble -> prepare -> roll -> null
// reversed: roll -> prepare -> assemble -> null