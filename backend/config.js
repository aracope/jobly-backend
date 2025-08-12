"use strict";

require("dotenv").config();
require("colors");

function getDatabaseUri() {
  if (process.env.NODE_ENV === "test") {
    return process.env.TEST_DATABASE_URL || process.env.SUPABASE_TEST_DATABASE_URL || "jobly_test";
  } else {
    return process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL || "jobly";
  }
}

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("Jobly Config:".green);
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY: process.env.SECRET_KEY || "secret-dev",
  PORT: +process.env.PORT || 3001,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
