//a.
function countRoles(users){
    let roleCount = { admin: 0, instructor: 0, student: 0 };
    for (let user of users) {
      if (roleCount.hasOwnProperty(user.role)) {
        roleCount[user.role]++;
      }
    }
    return roleCount;
}
//b.
function findAdmins(users){
 let admins = users
    .filter((user) => user.role === "admin")
    .map((user) => user.name);
  return admins.length > 0 ? admins : "No admins found"; // c. Modify to return message if no admins exist
}

//d.
function generateWelcomeMessages(users) {
  return users.map((user) => `Welcome, ${user.name}! You are an ${user.role}.`);
}

//e.Advantages:  
// These methods make the code more readable and reduce the chance of errors.




