const carbonStorage = [
  { _id: "tx_001", description: "Solar Panel Installation Offset", amountCO2: -5000, type: "Credit", date: new Date() }
];

class CarbonTransaction {
  constructor({ description, amountCO2, type }) {
    this._id = `tx_${Math.floor(1000 + Math.random() * 9000)}`;
    this.description = description;
    this.amountCO2 = Number(amountCO2) || 0;
    this.type = type || "Emission"; // Credit or Emission
    this.date = new Date();
  }
  async save() { carbonStorage.push(this); return this; }
  static async find() { return carbonStorage; }
}
module.exports = CarbonTransaction;