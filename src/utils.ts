export const countWords = (title: string): number => {
    return title.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(Boolean).length;
  };