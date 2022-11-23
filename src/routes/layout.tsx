import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import Header from "../components/header/header";
import { createClient } from "@supabase/supabase-js";
import { useEndpoint } from "@builder.io/qwik-city";
import { SessionContext } from "./SessionContext";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bnRnY3djaXFqeWp5Y2R3eGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNTA1NDAsImV4cCI6MTk4NDcyNjU0MH0.bunBJmwmvHnmzBXxQiofobc4Tn04SDymhYLOiIfl8wA";

export const supabaseUrl = "https://wtntgcwciqjyjycdwxdm.supabase.co";
export const supabaseKey = SUPABASE_KEY;

export const onGet = async () => {
  const supabase = createClient(supabaseUrl, supabaseKey || "");
  const { auth } = supabase;

  const sessionResponse = await auth.getSession();

  return sessionResponse.data.session;
};

export default component$(() => {
  const session = useEndpoint<typeof onGet>();
  useContextProvider(SessionContext, session);

  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
