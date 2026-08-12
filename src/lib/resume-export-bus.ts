type Listener = () => void | Promise<void>;

const KEY = "__RESUME_EXPORT_IMAGE_LISTENERS__";
declare global {
  interface Window {
    [KEY]?: Set<Listener>;
  }
}

function ensure(): Set<Listener> {
  if (!window[KEY]) window[KEY] = new Set();
  return window[KEY];
}

export function onResumeExportImage(cb: Listener): () => void {
  const set = ensure();
  set.add(cb);
  return () => set.delete(cb);
}

export async function triggerResumeExportImage(): Promise<void> {
  const set = ensure();
  const promises = Array.from(set).map((fn) => fn());
  await Promise.all(promises);
}
