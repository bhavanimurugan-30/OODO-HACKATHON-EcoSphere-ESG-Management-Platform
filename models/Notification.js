const alertStorage = [
  { _id: "nt_001", alertMessage: "Warning: Carbon emission threshold exceeded in Plant B", read: false, createdAt: new Date() }
];

class Notification {
  constructor({ alertMessage }) {
    this._id = `nt_${Math.floor(1000 + Math.random() * 9000)}`;
    this.alertMessage = alertMessage;
    this.read = false;
    this.createdAt = new Date();
  }
  async save() { alertStorage.push(this); return this; }
  static async find() { return alertStorage; }
}
module.exports = Notification;