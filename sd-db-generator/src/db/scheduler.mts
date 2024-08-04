export type SchedulerDefine = Readonly<{}>;

/**
 * Scheduler table. The key is the scheduler name.
 * @example `Automatic`
 */
export const schedulerTable = {
  "Align Your Steps": {},
  "Automatic": {},
  "DDIM": {},
  "Exponential": {},
  "Karras": {},
} as const satisfies Record<string, SchedulerDefine>;

export type SchedulerTable = typeof schedulerTable;
export type SchedulerName = keyof SchedulerTable;
