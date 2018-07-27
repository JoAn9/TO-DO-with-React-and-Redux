export function createUser(name, band) {
  return {
    type: 'CREATE_USER',
    user: {name, band},
  }
}