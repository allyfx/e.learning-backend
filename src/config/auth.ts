export default {
    jwt: {
        secret: process.env.APP_SECRET || 'default',
        expiredIn: '1d'
    }
}