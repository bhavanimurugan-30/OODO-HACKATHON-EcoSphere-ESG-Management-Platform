// In-Memory Storage for Emission Factors
const factorStorage = [
  {
    _id: "fac_301",
    activityType: "Electricity Grid",
    unit: "kWh",
    factorValue: 0.85, // kg CO2e per kWh
    region: "National Grid"
  }
];

class EmissionFactor {
  constructor({ activityType, unit, factorValue, region }) {
    this._id = `fac_${Math.floor(300 + Math.random() * 700)}`;
    this.activityType = activityType;
    this.unit = unit;
    this.factorValue = Number(factorValue) || 0;
    this.region = region || "Global";
  }

  async save() {
    factorStorage.push(this);
    return this;
  }

  static async find() {
    return factorStorage;
  }

  static async findByIdAndDelete(id) {
    const index = factorStorage.findIndex(f => f._id === id);
    if (index !== -1) {
      return factorStorage.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = EmissionFactor;