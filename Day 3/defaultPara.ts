//  Default values
function display(id: number, name: string, role: string = "Guest User") {
  console.log("Id", id);
  console.log("Name", name);
  console.log("Role", role);
}

display(1, "Codemind", "ITDept");
