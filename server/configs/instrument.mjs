import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://af131db271205ac0aad95004a001d48a@o4510917105352704.ingest.de.sentry.io/4510917115773008",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});