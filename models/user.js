class User {
  constructor (name, marker) {
    this.name = name
    this.marker = marker
  }

  name () {
    return this.name
  }

  marker () {
    return this.marker
  }
}

module.exports = User
