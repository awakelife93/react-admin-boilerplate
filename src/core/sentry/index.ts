import Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import _ from "lodash";

export const sentryLogLevel = Sentry.Severity;

export const sentryCaptureMessage = ({
  message,
  level = sentryLogLevel.Error,
}: {
  message: string;
  level: Sentry.Severity;
}): void => {
  Sentry.captureMessage(message, {
    level,
  });
};

export const sentryCaptureException = ({
  error,
  level = sentryLogLevel.Error,
}: {
  error: Error;
  level: Sentry.Severity;
}): void => {
  Sentry.captureException(error, {
    level,
  });
};

export const sentrySetExtra = (extra: any): void => {
  const keys = Object.keys(extra);

  _.forEach(keys, (key: string) => {
    const value = extra[key];
    Sentry.setExtra(key, value);
  });
};

export const sentrySetUserInfo = ({
  id,
  email,
  userName,
}: {
  id?: string;
  email?: string;
  userName?: string;
}): void => {
  Sentry.setUser({
    id,
    email,
    username: userName,
  });
};

Sentry.init({
  dsn: "",
  debug: true,
  tracesSampleRate: 2.0,
  integrations: [new Integrations.BrowserTracing()],
  environment: process.env.NODE_ENV,
});
