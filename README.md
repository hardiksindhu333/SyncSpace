# TeamFlow

> A focused workspace for turning team plans into visible, moving work.

TeamFlow brings projects, tasks, conversations, goals, and time tracking into one calm operating surface. It is a ClickUp-inspired project management app built for teams that want the flexibility of a full workspace without losing the thread of what matters today.

![TeamFlow](https://img.shields.io/badge/TeamFlow-project%20workspace-111827?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

## The workspace at a glance

| Plan | Organize | Execute | Learn |
| --- | --- | --- | --- |
| Workspaces, spaces, lists | Statuses, priorities, tags | Tasks, assignments, due dates | Activity, goals, time entries |
| Shared project context | Board and list workflows | Comments, attachments, dependencies | Dashboards and progress signals |

### What is here

- **Work that has a home**: structure teams and projects through workspaces, spaces, and lists.
- **Views that fit the moment**: move between list, board, calendar, Gantt, and timeline views.
- **A living task record**: combine ownership, priority, dates, custom fields, dependencies, comments, and attachments.
- **Team awareness**: keep activity, notifications, mentions, and live updates close to the work.
- **Goals with context**: connect objectives and progress back to the projects doing the work.
- **Time you can account for**: track time from the workspace and review the resulting entries.

## Run it locally

### Requirements

- Node.js 18 or newer
- A MongoDB database

### 1. Install

```bash
npm install
```

### 2. Configure the environment

Create `.env` in the project root:

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/teamflow?retryWrites=true&w=majority"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="replace-with-a-long-random-value"
```

OAuth credentials are optional. Add them when enabling the corresponding provider:

```env
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 3. Prepare the database

```bash
npm run db:generate
npm run db:push
```

### 4. Start TeamFlow

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000), create an account, and enter the workspace.

For a populated demo workspace, run `npm run db:seed-demo` after the database is ready.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run dev:next` | Start Next.js with Turbopack |
| `npm run build` | Create a production build |
| `npm run start` | Start the custom production server |
| `npm run db:generate` | Generate the Prisma client |
| `npm run db:push` | Push the Prisma schema to MongoDB |
| `npm run db:seed-demo` | Load demo data |
| `npm run db:seed-clickup` | Load the ClickUp-style seed dataset |
| `npm run db:add-users` | Add seed users |
| `npm run lint` | Run the project lint command |

## Where things live

```text
src/
├── app/                  Next.js routes, pages, and API handlers
│   ├── app/              Authenticated workspace screens
│   ├── api/              Workspace, task, document, goal, and user APIs
│   └── components/       Layout, UI, and view components
├── hooks/                Data, user, and socket hooks
├── lib/                  Auth, Prisma, mail, API, and realtime utilities
└── store/                Zustand workspace state
prisma/
└── schema.prisma         MongoDB data model
scripts/                  Demo and development data loaders
```

## Main routes

| Route | Use it for |
| --- | --- |
| `/` | Product landing page |
| `/auth/signin` | Sign in |
| `/auth/signup` | Create an account |
| `/app` | Workspace home |
| `/app/my-work` | Personal task view |
| `/app/goals` | Goals and objectives |
| `/app/docs` | Team documents |
| `/app/dashboards` | Progress dashboards |

The API is organized by resource under `src/app/api`, including workspaces, spaces, lists, tasks, documents, goals, notifications, time entries, shares, and search.

## Built with

- Next.js 15 and React 19
- TypeScript and Tailwind CSS
- Prisma with MongoDB
- NextAuth.js and bcryptjs
- Zustand for client state
- Socket.IO for realtime updates
- dnd-kit for drag-and-drop interactions
- Zod for request validation

## Project direction

The core workspace, authentication, task workflows, collaboration surfaces, goals, documents, and time tracking are in place. The next layer of polish is focused on deeper filtering and search, richer reporting, notifications, integrations, and automation rules.

## Contributing

Keep changes focused and easy to review:

1. Create a feature branch.
2. Make the smallest complete change.
3. Run the relevant command from the table above.
4. Open a pull request with the behavior and verification steps.

## License

No license file is currently included in this repository.

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Built with ❤️ by the TeamFlow team**

*Making project management accessible and beautiful for everyone.*
