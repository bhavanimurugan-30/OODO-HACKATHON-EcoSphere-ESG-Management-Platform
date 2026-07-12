// In-Memory Storage for Departments
const departmentStorage = [
  { _id: "dept_1", name: "Sustainability", budget: 50000 },
  { _id: "dept_2", name: "Operations", budget: 35000 }
];

class Department {
  constructor({ name, budget }) {
    this._id = `dept_${Math.floor(1000 + Math.random() * 9000)}`;
    this.name = name;
    this.budget = Number(budget) || 0;
    this.createdAt = new Date();
  }

  async save() {
    departmentStorage.push(this);
    return this;
  }

  static async find() {
    return departmentStorage;
  }

  static async findByIdAndDelete(id) {
    const index = departmentStorage.findIndex(d => d._id === id);
    if (index !== -1) {
      return departmentStorage.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = Department;