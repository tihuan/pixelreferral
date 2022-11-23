import { createContext, ResourceReturn, useContext } from "@builder.io/qwik";
import { Session } from "@supabase/supabase-js";

type SessionContextState = ResourceReturn<Session | null>;

export const SessionContext =
  createContext<SessionContextState>("session-context");

export const useSessionContext = () => useContext(SessionContext);
