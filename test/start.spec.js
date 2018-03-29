
const chai = require("chai");
const expect = chai.expect;

let res
// callback to pass to main handler to get result
function cb(err, resultObject) {
  if (err) res = err
  else res = resultObject
}

// import the main lambda handler function
const { handler } = require('../src/index')


describe('basic init directive', () => {

  const { startSkill, accessDatabase } = require('./directives')

  it('starts up', () => {
    handler(startSkill, { foo: 'bar' }, cb)
    expect(res.response.outputSpeech.ssml).to.exist
  })

  it.only('accesses the database', () => {
    handler(accessDatabase, { foo: 'bar' }, cb)
    console.log(res)
  })


})
