abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation, etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
  describe() {
    console.log(`IT Department - id (${this.id}) - name (${this.name})`);
  }
}

class AccountingDepartment extends Department {
  // Singleton
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(
      `Accounting Department - id (${this.id}) - name (${this.name})`
    );
  }

  addEmployee(employee: string) {
    if (employee !== 'Max') {
      // validation, etc
      this.employees.push(employee);
    }
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(`Reports: ${this.reports}`);
  }
}

const employee1 = Department.createEmployee('Diego');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Diego');

it.describe();
it.printEmployeeInformation();

const accounting = AccountingDepartment.getInstance(); // Singleton

accounting.addEmployee('Max');
accounting.addEmployee('Diego');

accounting.mostRecentReport = 'Year end report';
accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.printReports();

accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
