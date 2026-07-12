const bcrypt = require("bcryptjs");

// Virtual Array Database initialized on runtime memory
global.usersDatabase = global.usersDatabase || [];

class UserModel {
  constructor(userData) {
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
    this.role = userData.role || "Employee";
    this.department = userData.department || "General";
    this._id = "user_" + Math.random().toString(36).substr(2, 9);
    this.createdAt = new Date();
  }

  // Find user by email (Mock MongoDB findOne structure)
  static async findOne({ email }) {
    const found = global.usersDatabase.find(user => user.email === email);
    return found ? found : null;
  }

  // Save registration payload into runtime memory array
  async save() {
    // Hash password securely right before saving
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
    global.usersDatabase.push(this);
    return this;
  }
}

module.exports = UserModel;