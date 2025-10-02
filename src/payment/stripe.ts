import Strip from 'stripe';

const stripe = new Strip(process.env.STRIPE_SECRET_KEY!);


export default stripe;