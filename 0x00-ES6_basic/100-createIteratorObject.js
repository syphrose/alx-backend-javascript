export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = departments.reduce((acc, deptEmployees) => [...acc, ...deptEmployees], []);

  let const = 0;

  return {
    next() {
      if (const < employees.length) {
        return { value: employees[const], done: false };
      }
      return { done: true };
    },
  };
}
