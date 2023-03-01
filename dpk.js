const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY; //here I delete one if..else operation

  if (event && event.partitionKey) { //it makes the code shorter, but I don't think it easier to read and understand
    candidate = event.partitionKey;
  }
  else if (event) {
    const data = JSON.stringify(event);
    candidate = makeHash(data);
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = makeHash(candidate);
  }
  return candidate;
};

const makeHash = (item) =>{
  return crypto.createHash("sha3-512").update(item).digest("hex");
}