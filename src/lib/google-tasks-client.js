/**
 * Google Tasks API client via Apps Script webhook
 *
 * Extensible utility for creating, updating, and completing tasks
 * in Google Tasks from Claude Code, Codex, or any other tool.
 *
 * Usage:
 *   import { createTask, completeTask } from './google-tasks-client'
 *
 *   const taskId = await createTask('My Task', 'Description', '2026-06-15')
 *   await completeTask(taskId)
 */

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbw0RzUzzrXzn3inKcggu0deF05wbL2xGlR1r-tiMTR00nwLb03Lrx6lDWg8LGqbhUt7/exec'

/**
 * Create a new task in Google Tasks
 * @param {string} title - Task name (required)
 * @param {string} description - Task details (optional)
 * @param {string} dueDate - Due date in YYYY-MM-DD format (optional)
 * @returns {Promise<{id: string, title: string, status: string}>}
 */
export async function createTask(title, description = '', dueDate = null) {
  const payload = { title, description }
  if (dueDate) payload.dueDate = dueDate
  payload.action = 'create'

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok || result.error) {
      throw new Error(`Failed to create task: ${result.error || response.statusText}`)
    }

    return result // { id, title, status, ... }
  } catch (error) {
    console.error('GoogleTasks.createTask error:', error)
    throw error
  }
}

/**
 * Mark a task as complete
 * @param {string} taskId - Task ID from createTask response
 * @param {string} notes - Optional completion notes
 * @returns {Promise<{id: string, status: string, completedAt: string}>}
 */
export async function completeTask(taskId, notes = '') {
  const payload = {
    action: 'complete',
    taskId,
  }
  if (notes) payload.notes = notes

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok || result.error) {
      throw new Error(`Failed to complete task: ${result.error || response.statusText}`)
    }

    return result // { id, status: 'completed', completedAt, ... }
  } catch (error) {
    console.error('GoogleTasks.completeTask error:', error)
    throw error
  }
}

/**
 * Get task status
 * @param {string} taskId - Task ID
 * @returns {Promise<{id: string, title: string, status: string, ...}>}
 */
export async function getTask(taskId) {
  const payload = {
    action: 'get',
    taskId,
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok || result.error) {
      throw new Error(`Failed to get task: ${result.error || response.statusText}`)
    }

    return result
  } catch (error) {
    console.error('GoogleTasks.getTask error:', error)
    throw error
  }
}

/**
 * Update task (add notes, change due date, etc.)
 * @param {string} taskId - Task ID
 * @param {object} updates - Fields to update { notes?, dueDate?, ... }
 * @returns {Promise<{id: string, ...}>}
 */
export async function updateTask(taskId, updates = {}) {
  const payload = {
    action: 'update',
    taskId,
    ...updates,
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok || result.error) {
      throw new Error(`Failed to update task: ${result.error || response.statusText}`)
    }

    return result
  } catch (error) {
    console.error('GoogleTasks.updateTask error:', error)
    throw error
  }
}

export default {
  createTask,
  completeTask,
  getTask,
  updateTask,
}
