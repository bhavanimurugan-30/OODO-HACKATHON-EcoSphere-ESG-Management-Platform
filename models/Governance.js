const govStorage = [
  { _id: "gov_001", issueTitle: "Annual ESG Audit 2026", riskLevel: "Low", status: "Compliant" }
];

class Governance {
  constructor({ issueTitle, riskLevel, status }) {
    this._id = `gov_${Math.floor(1000 + Math.random() * 9000)}`;
    this.issueTitle = issueTitle;
    this.riskLevel = riskLevel || "Medium";
    this.status = status || "Pending Review";
  }
  async save() { govStorage.push(this); return this; }
  static async find() { return govStorage; }
}
module.exports = Governance;