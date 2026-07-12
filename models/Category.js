// In-Memory Storage for Categories
const categoryStorage = [
  { _id: "cat_1", title: "Carbon Emission", type: "Environmental" },
  { _id: "cat_2", title: "Renewable Energy", type: "Environmental" }
];

class Category {
  constructor({ title, type }) {
    this._id = `cat_${Math.floor(1000 + Math.random() * 9000)}`;
    this.title = title;
    this.type = type || "Environmental";
    this.createdAt = new Date();
  }

  async save() {
    categoryStorage.push(this);
    return this;
  }

  static async find() {
    return categoryStorage;
  }

  static async findByIdAndDelete(id) {
    const index = categoryStorage.findIndex(c => c._id === id);
    if (index !== -1) {
      return categoryStorage.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = Category;