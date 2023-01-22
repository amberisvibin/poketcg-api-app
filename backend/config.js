"use strict";

/** Shared config for application; can be required many places. */

console.log(require("dotenv").config());
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = process.env.PORT || 3001;

const POKEMONAPI_KEY = process.env.POKEMONAPI_KEY || "";

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return process.env.NODE_ENV === "test"
    ? ""
    : process.env.DATABASE_URL || "missingnone";
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("MissingNone Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("Pokemon API:".yellow, POKEMONAPI_KEY);
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  POKEMONAPI_KEY,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
