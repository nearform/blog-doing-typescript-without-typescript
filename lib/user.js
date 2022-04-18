'use strict'

const nodemailer = require('nodemailer');

// @ts-check

/**
 * @typedef { import("../profile").Profile } Profile
 */
/**
 * @typedef User
 * @property {string} email
 * @property {string} name
 * @property {Profile} profile
 */

/**
 * send welcome email to the recipient (with magic)
 * @param {string} email - the recipient's email address
 * @returns {boolean}
 */
function sendWelcomeEmail (email) {
  // ... send emails
  console.log('email sent to ', email)
  return true
}

/**
 * subscribe a user to the newsletter
 * @param {User} user - the new user
 * @example subscribe({name: 'John', email: 'john@email.com'})
 */
function subscribe (user) {
  // .. save to storage
  sendWelcomeEmail(user.email)
}

module.exports = {
  subscribe,
  sendWelcomeEmail
}
