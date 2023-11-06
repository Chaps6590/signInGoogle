const {OAuth2Client} = require('google-auth-library');


const CLIENT_ID = '378432942091-komg6303ioivtqad4q94q7c2glhi9g0p.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleId = async (token) => {
  try {

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [
        CLIENT_ID,          
        '378432942091-komg6303ioivtqad4q94q7c2glhi9g0p.apps.googleusercontent.com',
        '378432942091-8t4oqibru97jmj1n2jmstji8bd4vqede.apps.googleusercontent.com'
      ],  
      // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();

  console.log(payload);
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];

  return {

    name: payload['name'],
    picture: payload['picture'],
    email: payload['email']
  }
    
  } catch (error) {
    return null
  }

 
  
}


module.exports = {
  validarGoogleId
}

