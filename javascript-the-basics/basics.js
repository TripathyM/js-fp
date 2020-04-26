const emp = {
  id: 1,
  firstName: 'Manish',
  lastName: 'Tripathy',
}

console.log('Emp', emp)

// spread operator - Used to add/modify properties in object
// spread operator appears in the RHS of the '=' operator
const empWithHome = {
  ...emp,
  home: 'FCI'
}

console.log('EmpWithHome', empWithHome)

// Object destructuring 
// const { id, firstName } = emp

// console.log('id', id, 'First Name', firstName)

// rest operator - Useful when we want to remove properties from object
const { id, ...empWithoutId } = emp
console.log(empWithoutId)
