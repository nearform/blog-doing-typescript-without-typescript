'use strict'

// @ts-check

/**
 * @typedef User
 * @property {string} email
 * @property {string} name
 */

/**
 * 
 * @param {string} email 
 * @returns {boolean}
 */
function sendWelcomeEmail(email) {
  // ... send emails
  console.log('email sent to ', email)
  return true
}

/**
 * @param {User} user 
 */
function subscribe(user) {
  // .. save to storage
  sendWelcomeEmail(user.email)
}

function main () {
  /** @type {string} */
  const name = process.argv[2]
  /** @type {string} */
  const email = process.argv[3]

  const user = {name, email}

  subscribe(user)
}

main()
