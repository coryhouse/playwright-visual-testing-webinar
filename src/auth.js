function isAuthenticated(req) {
  const credentials = 'user:pass' || process.env.HTTP_BASIC_AUTH
  const [AUTH_USER, AUTH_PASS] = credentials.split(':');

  const blocklist = /products\/gorgeous-cotton-computer/.test(req.url)
  const authheader = req.headers.get('authorization') || req.headers.get('Authorization');

  if (!blocklist && !authheader) return {accessGranted: true};
  if (!authheader) return {accessGranted: false};

  const auth = Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
  const user = auth[0];
  const pass = auth[1];

  if (user == AUTH_USER && pass == AUTH_PASS) {
    return {accessGranted: true, loggedIn: true}
  }
  return {accessGranted: false}
}

module.exports = {isAuthenticated}
