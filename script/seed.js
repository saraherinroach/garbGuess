'use strict'

const db = require('../server/db')
const {User, Garb} = require('../server/db/models')

const garbSeed = [
  {
    type: 'top',
    warmthLevel: 1,
    timesWorn: 0,
    userId: 1
  },
  {
    type: 'bottom',
    warmthLevel: 3,
    timesWorn: 0,
    userId: 1,
    imageUrl:
      'https://images.express.com/is/image/expressfashion/0035_03073429_1478?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
  },
  {
    type: 'top',
    warmthLevel: 5,
    timesWorn: 0,
    userId: 2
  },
  {
    type: 'bottom',
    warmthLevel: 5,
    timesWorn: 0,
    userId: 2,
    imageUrl:
      'https://images.express.com/is/image/expressfashion/0035_03073429_1478?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const garbs = await Promise.all(
    garbSeed.map(async garb => {
      const allGarbs = await Garb.create(garb)
      return allGarbs
    })
  )

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${garbs.length} garbs`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
