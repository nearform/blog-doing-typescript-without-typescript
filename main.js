'use strict'

// @ts-check

/** @typedef {import('./lib/user').User} User */

const { subscribe } = require('./lib/user')

function main () {
  /** @type {string} */
  const name = process.argv[2]
  /** @type {string} */
  const email = process.argv[3]

  /** @type User */
  const user = {
    name,
    email,
    profile: { subscription: new Date(), account: 'BASIC' }
  }

  subscribe(user)
}

main()
