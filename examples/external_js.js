exports.get_greeting = function(name) {
  return `Hello, ${name}!`;
};

exports.regex_inflight = async function(pattern, text) {
  const regex = new RegExp(pattern);
  return regex.test(text);
};
