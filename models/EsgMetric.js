// In-Memory Virtual Database Storage for ESG Metrics
const esgStorage = [
  {
    _id: "esg_001",
    companyName: "EcoSphere Corp",
    carbonEmission: 245.5,
    energyConsumption: 12400,
    waterUsage: 4500,
    wasteRecycled: 82.4,
    sustainabilityScore: 78,
    lastUpdated: new Date()
  }
];

class EsgMetric {
  constructor(data) {
    this._id = `esg_${Math.floor(1000 + Math.random() * 9000)}`;
    this.companyName = data.companyName;
    this.carbonEmission = Number(data.carbonEmission) || 0;
    this.energyConsumption = Number(data.energyConsumption) || 0;
    this.waterUsage = Number(data.waterUsage) || 0;
    this.wasteRecycled = Number(data.wasteRecycled) || 0;
    this.sustainabilityScore = Number(data.sustainabilityScore) || 50;
    this.lastUpdated = new Date();
  }

  async save() {
    esgStorage.push(this);
    return this;
  }

  static async find() {
    return esgStorage;
  }
}

module.exports = EsgMetric;