import App from "./App";
import Signals = NodeJS.Signals;

const signals: Array<Signals> = [
  "SIGINT",
  "SIGTERM"
];
const app = new App();
app.start();

signals.forEach((signal: Signals) => {
  process.on(signal, function () {
    app.shutDown();
  });
});
