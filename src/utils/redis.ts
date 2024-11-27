import Redis from "ioredis";

/*
 * connect to the redis server
 * Redis is a key-value store that is used to store data in memory.
 * Key value will be address => timestamp of last faucet request.
 * Total transfers and total value would be stored there too under keys "count" and "total"
 */
const redis = new Redis(process.env.REDIS_URL as string);

export default redis;
