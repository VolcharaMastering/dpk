const crypto = require('crypto');
global.crypto = crypto;
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });


  it("Returns the partitionKey if it exists", () => {
    const event = { partitionKey: "here_is_my_partition_key" };
    expect(deterministicPartitionKey(event)).toBe("here_is_my_partition_key");
  });

  it("Returns a hash if the partitionKey is undefined, convert JSON candidates to string", () => {
    const event = { Sam: "partition_key_1", Alex: "partition_key_2", John: "partition_key_3" };
    const data = JSON.stringify(event);
    const hash = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  it("Returns hashed again candidate if its length > MAX_PARTITION_KEY_LENGTH", () => {
    const candidate = "a".repeat(512);
    expect(deterministicPartitionKey(candidate)).toHaveLength(128);
  });
});
