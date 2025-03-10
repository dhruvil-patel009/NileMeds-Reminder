/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams:
        | {
            pathname: Router.RelativePathString;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: Router.ExternalPathString;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `/_sitemap`; params?: Router.UnknownInputParams }
        | {
            pathname: `${'/(tabs)'}/AddNew` | `/AddNew`;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: `${'/(tabs)'}/Profile` | `/Profile`;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams }
        | { pathname: `/action-modal`; params?: Router.UnknownInputParams }
        | {
            pathname: `/add-new-medication`;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `/login`; params?: Router.UnknownInputParams }
        | { pathname: `/login/signUp`; params?: Router.UnknownInputParams }
        | { pathname: `/login/signin`; params?: Router.UnknownInputParams };
      hrefOutputParams:
        | {
            pathname: Router.RelativePathString;
            params?: Router.UnknownOutputParams;
          }
        | {
            pathname: Router.ExternalPathString;
            params?: Router.UnknownOutputParams;
          }
        | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams }
        | {
            pathname: `${'/(tabs)'}/AddNew` | `/AddNew`;
            params?: Router.UnknownOutputParams;
          }
        | {
            pathname: `${'/(tabs)'}/Profile` | `/Profile`;
            params?: Router.UnknownOutputParams;
          }
        | {
            pathname: `${'/(tabs)'}` | `/`;
            params?: Router.UnknownOutputParams;
          }
        | { pathname: `/action-modal`; params?: Router.UnknownOutputParams }
        | {
            pathname: `/add-new-medication`;
            params?: Router.UnknownOutputParams;
          }
        | { pathname: `/login`; params?: Router.UnknownOutputParams }
        | { pathname: `/login/signUp`; params?: Router.UnknownOutputParams }
        | { pathname: `/login/signin`; params?: Router.UnknownOutputParams };
      href:
        | Router.RelativePathString
        | Router.ExternalPathString
        | `/_sitemap${`?${string}` | `#${string}` | ''}`
        | `${'/(tabs)'}/AddNew${`?${string}` | `#${string}` | ''}`
        | `/AddNew${`?${string}` | `#${string}` | ''}`
        | `${'/(tabs)'}/Profile${`?${string}` | `#${string}` | ''}`
        | `/Profile${`?${string}` | `#${string}` | ''}`
        | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}`
        | `/${`?${string}` | `#${string}` | ''}`
        | `/action-modal${`?${string}` | `#${string}` | ''}`
        | `/add-new-medication${`?${string}` | `#${string}` | ''}`
        | `/login${`?${string}` | `#${string}` | ''}`
        | `/login/signUp${`?${string}` | `#${string}` | ''}`
        | `/login/signin${`?${string}` | `#${string}` | ''}`
        | {
            pathname: Router.RelativePathString;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: Router.ExternalPathString;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `/_sitemap`; params?: Router.UnknownInputParams }
        | {
            pathname: `${'/(tabs)'}/AddNew` | `/AddNew`;
            params?: Router.UnknownInputParams;
          }
        | {
            pathname: `${'/(tabs)'}/Profile` | `/Profile`;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams }
        | { pathname: `/action-modal`; params?: Router.UnknownInputParams }
        | {
            pathname: `/add-new-medication`;
            params?: Router.UnknownInputParams;
          }
        | { pathname: `/login`; params?: Router.UnknownInputParams }
        | { pathname: `/login/signUp`; params?: Router.UnknownInputParams }
        | { pathname: `/login/signin`; params?: Router.UnknownInputParams };
    }
  }
}
