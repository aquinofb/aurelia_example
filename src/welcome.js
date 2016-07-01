export class App {
  constructor() {
    this.heading = "Welcome to Aurelia!"
    this.firstName = "Felipe";
    this.lastName = "Aquino";
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    console.log(`Wellcome ${this.fullName}`);
  }
}
