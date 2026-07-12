// In-Memory Storage for Employees
const employeeStorage = [
  {
    _id: "emp_101",
    firstName: "Murugan",
    lastName: "M",
    email: "murugan@test.com",
    departmentId: "dept_1", // Linked to Sustainability
    designation: "ESG Analyst",
    joinedDate: new Date()
  }
];

class Employee {
  constructor(data) {
    this._id = `emp_${Math.floor(100 + Math.random() * 900)}`;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.departmentId = data.departmentId || "dept_unknown";
    this.designation = data.designation || "Staff";
    this.joinedDate = new Date();
  }

  async save() {
    employeeStorage.push(this);
    return this;
  }

  static async find() {
    return employeeStorage;
  }

  static async findByIdAndDelete(id) {
    const index = employeeStorage.findIndex(e => e._id === id);
    if (index !== -1) {
      return employeeStorage.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = Employee;