
 const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'xxx',
    user: '',
    password: 'xxx',
    database: 'xxx',
    port: 5432,
    ssl: true
  },
  searchPath: ['knex', 'public']
  
});


export function selectAllUsers(){
  return new Promise((resolve, reject) =>{
    console.log('select books......');
    db.select('id', 'first_name as firstName', 'last_name as lastName', 'full_name as fullName')
    .from('pm_maze_users').then( res =>{
      console.log(res);
      resolve( res);
    }, err =>{
      console.log(err);
      resolve( []);
    });
  })
    
  }