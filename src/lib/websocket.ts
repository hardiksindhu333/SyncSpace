export interface SocketNotification {
  id: string
  title: string
  message: string
  type?: string
  createdAt?: string
}

export interface TaskUpdate {
  id: string
  taskId?: string
  workspaceId?: string
  [key: string]: unknown
}

export interface CommentData {
  taskId: string
  content?: string
  comment?: string
  authorId?: string
  [key: string]: unknown
}

export interface UserPresence {
  userId: string
  name: string
  image?: string | null
}

export interface ClientToServerEvents {
  'user-online': (user: UserPresence) => void
  'join-workspace': (workspaceId: string) => void
  'leave-workspace': (workspaceId: string) => void
  'join-task': (taskId: string) => void
  'leave-task': (taskId: string) => void
  'start-typing': (taskId: string) => void
  'stop-typing': (taskId: string) => void
  'update-task': (taskId: string, updates: Partial<TaskUpdate>) => void
  'add-comment': (data: { taskId: string; content: string; mentions?: string[] }) => void
  'mark-notification-read': (notificationId: string) => void
  'mark-all-notifications-read': () => void
}

export interface ServerToClientEvents {
  notification: (notification: SocketNotification) => void
  'task-updated': (update: TaskUpdate) => void
  'task-created': (task: TaskUpdate) => void
  'task-deleted': (taskId: string) => void
  'task-moved': (data: TaskUpdate) => void
  'comment-added': (comment: CommentData) => void
  'user-joined': (user: UserPresence) => void
  'user-left': (userId: string) => void
  'users-online': (users: UserPresence[]) => void
  'user-typing': (data: { userId: string; taskId: string; isTyping: boolean }) => void
}
