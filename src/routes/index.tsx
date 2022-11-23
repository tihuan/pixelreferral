import {
  component$,
  Resource,
  useClientMount$,
  useStore,
  useWatch$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { createClient, Session } from "@supabase/supabase-js";
import { useSessionContext } from "./SessionContext";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bnRnY3djaXFqeWp5Y2R3eGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNTA1NDAsImV4cCI6MTk4NDcyNjU0MH0.bunBJmwmvHnmzBXxQiofobc4Tn04SDymhYLOiIfl8wA";

export const supabaseUrl = "https://wtntgcwciqjyjycdwxdm.supabase.co";
export const supabaseKey = SUPABASE_KEY;

// supabase.auth.signInWithOtp({ email: });
// supabase.auth.signUp;

export default component$(() => {
  // Check if session, if not, show login button and show public queues
  // If yes, show public queues, queues they're in, and chats they're in
  // /chats/:id tabbed window is giver-user match by chat. Giver and user can close chat anytime

  const sessionContext = useSessionContext();

  return (
    <div>
      <h1>Welcome to Pixel Referral 📱🙌</h1>
      {/* DEBUG */}
      {/* DEBUG */}
      {/* DEBUG */}
      <span>
        <Resource
          value={sessionContext}
          onResolved={(session) => {
            return (
              <>
                {session ? (
                  <div>Your session is: {JSON.stringify(session)}</div>
                ) : (
                  <button
                    onClick$={() => {
                      console.log("logging in...");
                    }}
                  >
                    Login
                  </button>
                )}
              </>
            );
          }}
        />
      </span>
      <ul>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>
      <h2>Commands</h2>
      <table class="commands">
        <tr>
          <td>
            <code>npm run dev</code>
          </td>
          <td>Start the dev server and watch for changes.</td>
        </tr>
        <tr>
          <td>
            <code>npm run preview</code>
          </td>
          <td>Production build and start preview server.</td>
        </tr>
        <tr>
          <td>
            <code>npm run build</code>
          </td>
          <td>Production build.</td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add</code>
          </td>
          <td>Select an integration to add.</td>
        </tr>
      </table>
      <h2>Add Integrations</h2>
      <table class="commands">
        <tr>
          <td>
            <code>npm run qwik add cloudflare-pages</code>
          </td>
          <td>
            <a href="https://developers.cloudflare.com/pages" target="_blank">
              Cloudflare Pages Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add express</code>
          </td>
          <td>
            <a href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add netlify-edge</code>
          </td>
          <td>
            <a href="https://docs.netlify.com/" target="_blank">
              Netlify Edge Functions
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add static</code>
          </td>
          <td>
            <a
              href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
              target="_blank"
            >
              Static Site Generation (SSG)
            </a>
          </td>
        </tr>
      </table>
      <h2>Community</h2>
      <ul>
        <li>
          <span>Questions or just want to say hi? </span>
          <a href="https://qwik.builder.io/chat" target="_blank">
            Chat on discord!
          </a>
        </li>
        <li>
          <span>Follow </span>
          <a href="https://twitter.com/QwikDev" target="_blank">
            @QwikDev
          </a>
          <span> on Twitter</span>
        </li>
        <li>
          <span>Open issues and contribute on </span>
          <a href="https://github.com/BuilderIO/qwik" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <span>Watch </span>
          <a href="https://qwik.builder.io/media/" target="_blank">
            Presentations, Podcasts, Videos, etc.
          </a>
        </li>
      </ul>
      <Link class="mindblow" href="/flower/">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
