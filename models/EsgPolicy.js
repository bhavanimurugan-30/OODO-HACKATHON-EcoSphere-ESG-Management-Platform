// In-Memory Storage for ESG Policies
const policyStorage = [
  {
    _id: "pol_201",
    title: "Net Zero Carbon 2030",
    description: "Strategy framework to reduce global scope 1 emissions down to absolute zero.",
    status: "Active"
  }
];

class EsgPolicy {
  constructor({ title, description, status }) {
    this._id = `pol_${Math.floor(200 + Math.random() * 800)}`;
    this.title = title;
    this.description = description;
    this.status = status || "Draft";
    this.createdAt = new Date();
  }

  async save() {
    policyStorage.push(this);
    return this;
  }

  static async find() {
    return policyStorage;
  }

  static async findByIdAndDelete(id) {
    const index = policyStorage.findIndex(p => p._id === id);
    if (index !== -1) {
      return policyStorage.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = EsgPolicy;