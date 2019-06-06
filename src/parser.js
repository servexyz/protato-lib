const log = console.log;
function isEnvironmentSingle(potentiallySingleEnvironment) {
  return potentiallySingleEnvironment.hasOwnProperty("environments");
}
