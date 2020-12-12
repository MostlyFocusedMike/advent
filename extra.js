const isPrime = (num) => {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log('hii: ', i);
      factors.push(i);
    }
  }
  return factors.length > 1 ? factors[1] : factors[0];
}

// console.log('isPrime(2): ', isPrime(20));
// console.log('isPrime(2): ', isPrime(5915587278));

const logs = [
  '99 1 sign-in',
  '100 10 sign-in',
  '50 21 sign-in',
  '99 19 sign-out',
  '100 15 sign-out',
  '50 25 sign-out',
];

const processLogs = (logs) => {
  const records = {}
  for (const log of logs) {
    const [id, time, rawAction] = log.split(' ');
    const action = rawAction.replace('-', '_');
    records[id] = records[id] || {}
    const user = records[id]

    user[action] = time;
    if (user.sign_in && user.sign_out) {
      user.time_delta = user.sign_out - user.sign_in
    }
  }
  return records;
}

const main = (rawLogs, maxSpan) => {
  const users = processLogs(rawLogs);
  const results = [];

  for (const userID of Object.keys(users)) {
    const {time_delta} = users[userID];
    if (time_delta <= maxSpan) results.push(userID)
  }

  return results;
}

console.log('main(logs, 5): ', main(logs, 5));

const bonus = (rawLogs, mainId) => {
  const users = processLogs(rawLogs);
  console.log('users: ', users);
  const { sign_in: mainSignIn, sign_out: mainSignOut } = users[mainId];

  const results = [];
  for (const userId of Object.keys(users)) {
    if (parseInt(userId, 10) === mainId) continue;
    const user = users[userId]
    if (
      (mainSignIn <= user.sign_in && user.sign_in <= mainSignOut)
      || (user.sign_in <= mainSignIn && mainSignIn <= user.sign_out)
    ) {
      results.push(userId)
    }
  }
  return results;
}

console.log('bonus(logs, 5): ', bonus(logs, 99));
