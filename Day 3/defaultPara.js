"use strict";
//  Default values
function display(id, name, role = "Guest User") {
    console.log("Id", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, "Codemind", "ITDept");
