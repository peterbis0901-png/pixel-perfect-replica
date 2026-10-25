<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Tour copy lives in src/lib/tour-content.ts (vi/en pairs); the AI assistant (/api/chat) answers only from that file, so edit content there and the assistant stays in sync.
- Booking requests are stored in Cloud table booking_requests (public insert, admin-only read via has_role); the first account created becomes admin.
