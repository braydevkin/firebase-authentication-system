const config = {
  apiKey: process.env.API_KEY,
  authDomain:process.env.AUTH_DOMAIN ,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAIGER_SEND_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

module.exports = config

