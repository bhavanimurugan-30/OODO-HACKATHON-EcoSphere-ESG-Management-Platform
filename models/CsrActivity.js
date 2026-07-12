const csrStorage = [
  { _id: "csr_001", eventName: "Green Canopy Tree Plantation", budgetAllocated: 15000, volunteerCount: 45 }
];

class CsrActivity {
  constructor({ eventName, budgetAllocated, volunteerCount }) {
    this._id = `csr_${Math.floor(1000 + Math.random() * 9000)}`;
    this.eventName = eventName;
    this.budgetAllocated = Number(budgetAllocated) || 0;
    this.volunteerCount = Number(volunteerCount) || 0;
  }
  async save() { csrStorage.push(this); return this; }
  static async find() { return csrStorage; }
}
module.exports = CsrActivity;