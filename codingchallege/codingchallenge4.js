const bill = prompt(`Enter the bill`);
bill <= 300 && bill >= 50 && !(bill <= 0) ? console.log(`The bill was ${bill}, the tip was ${0.15 * bill}, and the total value bill ${Number(bill) + (0.15 * bill)}`)
    : console.log(`The bill was ${bill}, the tip was ${0.20 * bill}, and the total value bill ${Number(bill) + (0.20 * bill)}`);
