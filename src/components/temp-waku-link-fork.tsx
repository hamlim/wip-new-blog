"use client";

import {
  Fragment,
  createContext,
  createElement,
  useContext,
  useEffect,
  useRef,
  useTransition,
} from "react";
import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  TransitionFunction,
} from "react";

import { useRouter } from "waku";

// import type { RouteConfig } from "./base-types.js";
import type { RouteConfig } from "waku/router";
// import type { RouteProps } from "./common.js";

type RouteProps<Path extends string = string> = {
  path: Path;
  query: string;
  hash: string;
};

type AllowPathDecorators<Path extends string> = Path extends unknown
  ? Path | `${Path}?${string}` | `${Path}#${string}`
  : never;

type InferredPaths = RouteConfig extends {
  paths: infer UserPaths extends string;
}
  ? AllowPathDecorators<UserPaths>
  : string;

// declare global {
//   interface ImportMeta {
//     readonly env: Record<string, string>;
//   }
// }

const normalizeRoutePath = (path: string) => {
  for (const suffix of ["/", "/index.html"]) {
    if (path.endsWith(suffix)) {
      return path.slice(0, -suffix.length) || "/";
    }
  }
  return path;
};

const parseRoute = (url: URL): RouteProps => {
  const { pathname, searchParams, hash } = url;
  return {
    path: normalizeRoutePath(pathname),
    query: searchParams.toString(),
    hash,
  };
};

const isAltClick = (event: MouseEvent<HTMLAnchorElement>) =>
  event.button !== 0 ||
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

// type ChangeRoute = (
//   route: RouteProps,
//   options: {
//     shouldScroll: boolean;
//     skipRefetch?: boolean;
//   },
// ) => Promise<void>;

// type ChangeRouteEvent = "start" | "complete";

// type ChangeRouteCallback = (route: RouteProps) => void;

// type PrefetchRoute = (route: RouteProps) => void;

// const RouterContext = createContext<{
//   route: RouteProps;
//   changeRoute: ChangeRoute;
//   prefetchRoute: PrefetchRoute;
//   routeChangeEvents: Record<
//     "on" | "off",
//     (event: ChangeRouteEvent, handler: ChangeRouteCallback) => void
//   >;
// } | null>(null);

//// START ADDED
type RefLike = { current: any } | ((value: any) => void);

function mergeRefs(...refs: Array<RefLike>) {
  return (reference: any) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(reference);
      } else if (
        typeof ref === "object" &&
        ref != null &&
        !Array.isArray(ref)
      ) {
        ref.current = reference;
      }
    }
  };
}

function useSharedRef(...refs: Array<RefLike>) {
  let localRef = useRef<any>(undefined);

  return {
    set current(el) {
      mergeRefs(...refs, localRef)(el);
    },
    get current() {
      return localRef.current;
    },
  };
}

//// END ADDED

export type LinkProps = {
  to: InferredPaths;
  children: ReactNode;
  /**
   * indicates if the link should scroll or not on navigation
   * - `true`: always scroll
   * - `false`: never scroll
   * - `undefined`: scroll on path change (not on searchParams change)
   */
  scroll?: boolean;
  unstable_pending?: ReactNode;
  unstable_notPending?: ReactNode;
  unstable_prefetchOnEnter?: boolean;
  unstable_prefetchOnView?: boolean;
  unstable_startTransition?: ((fn: TransitionFunction) => void) | undefined;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Link({
  to,
  children,
  scroll,
  unstable_pending,
  unstable_notPending,
  unstable_prefetchOnEnter,
  unstable_prefetchOnView,
  unstable_startTransition,
  ref: providedRef,
  ...props
}: LinkProps): ReactElement {
  // const router = useContext(RouterContext);
  const router = useRouter();
  const changeRoute = router
    ? router.changeRoute
    : () => {
        throw new Error("Missing Router");
      };
  const prefetchRoute = router
    ? router.prefetchRoute
    : () => {
        throw new Error("Missing Router");
      };
  const [isPending, startTransition] = useTransition();
  const startTransitionFn =
    unstable_startTransition ||
    ((unstable_pending || unstable_notPending) && startTransition) ||
    ((fn: TransitionFunction) => fn());
  //// START ADDED
  //   const ref = useRef<HTMLAnchorElement>(undefined);
  const ref = useSharedRef(providedRef);
  //// END ADDED

  // biome-ignore lint/correctness/useExhaustiveDependencies: useSharedRef provides a ref-like
  useEffect(() => {
    if (unstable_prefetchOnView && ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const url = new URL(to, window.location.href);
              if (router && url.href !== window.location.href) {
                const route = parseRoute(url);
                router.prefetchRoute(route);
              }
            }
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [unstable_prefetchOnView, router, to]);
  const internalOnClick = () => {
    const url = new URL(to, window.location.href);
    if (url.href !== window.location.href) {
      const route = parseRoute(url);
      prefetchRoute(route);
      startTransitionFn(async () => {
        const newPath = url.pathname !== window.location.pathname;
        window.history.pushState(
          {
            ...window.history.state,
            waku_new_path: newPath,
          },
          "",
          url,
        );
        await changeRoute(route, { shouldScroll: scroll ?? newPath });
      });
    }
  };
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) {
      props.onClick(event);
    }
    if (!event.defaultPrevented && !isAltClick(event)) {
      event.preventDefault();
      internalOnClick();
    }
  };
  const onMouseEnter = unstable_prefetchOnEnter
    ? (event: MouseEvent<HTMLAnchorElement>) => {
        const url = new URL(to, window.location.href);
        if (url.href !== window.location.href) {
          const route = parseRoute(url);
          prefetchRoute(route);
        }
        props.onMouseEnter?.(event);
      }
    : props.onMouseEnter;
  const ele = createElement(
    "a",
    { ...props, href: to, onClick, onMouseEnter, ref },
    children,
  );
  if (isPending && unstable_pending !== undefined) {
    return createElement(Fragment, null, ele, unstable_pending);
  }
  if (!isPending && unstable_notPending !== undefined) {
    return createElement(Fragment, null, ele, unstable_notPending);
  }
  return ele;
}
