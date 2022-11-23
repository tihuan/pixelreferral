import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import Header from "../components/header/header";

import { useEndpoint } from "@builder.io/qwik-city";
import { SessionContext } from "./SessionContext";
import { createSupabase } from "./utils/supabase";

export const onGet = async () => {
  const supabase = createSupabase();
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
